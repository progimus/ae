document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upload')
            .addEventListener('input', handleUpload);

    document.getElementById('previous')
        .addEventListener('click', handlePagination);

    document.getElementById('next')
            .addEventListener('click', handlePagination);

    document.getElementById('download')
            .addEventListener('click', handleSave);
})

let files, questions, test;

const handleUpload = async event => {
    files = [...event.target.files]
        .filter(file => file.type === 'application/json');

    const firstTest = await readJSON(files[test = 0]);

    loadTest(firstTest);

    document.getElementById('progress').style.width = '0px';
}

const loadTest = async test => {
    const container = document.getElementById('container');
    
    questions = JSON.parse(test);

    for (index in questions) {
        const question = questions[index];
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitle = document.createElement('div');
        const cardText = document.createElement('div');

        card.classList.add('card');
        cardBody.classList.add('card-body');
        cardTitle.classList.add('card-title');
        cardText.classList.add('card-text');

        if (question.image) {
            const cardImage = document.createElement('img');
            const customFile = document.createElement('div');
            const input = document.createElement('input');
            const label = document.createElement('label');

            cardImage.classList.add('card-img');
            customFile.classList.add('custom-file', 'mb-3');
            input.classList.add('custom-file-input');
            label.classList.add('custom-file-label', 'd-inline-block', 'text-truncate');

            cardImage.src = question.image;

            input.setAttribute('type', 'file');
            input.addEventListener('input', async event => {
                const file = input.files[0];
                const base64 = await readImage(file);

                label.textContent = file.name;

                cardImage.src = base64;
                question.image = base64;
            });

            card.appendChild(cardImage);
            
            customFile.appendChild(input);
            customFile.appendChild(label)
                .appendChild(document.createTextNode('Choose file'));

            cardBody.appendChild(customFile);
        }

        cardBody.appendChild(cardTitle.cloneNode())
                .appendChild(document.createTextNode(question.question));

        question.answers.forEach(answer => {
            cardBody.appendChild(cardText.cloneNode())
                .appendChild(
                    document.createTextNode(`${answer.id}) ${answer.answer}`)
                );
        });

        card.appendChild(cardBody);

        container.appendChild(card);
    }
}

const readJSON = json => new Promise((resolve, reject) => {
    const reader = new FileReader;

    reader.onload = event => resolve(event.target.result)

    reader.readAsText(json, 'UTF-8');
});

const readImage = image => new Promise((resolve, reject) => {
    const reader = new FileReader;

    reader.onload = event => resolve(event.target.result)

    reader.readAsDataURL(image);
});

const handlePrevious = async event => {

}

const handlePagination = async event => {
    const container = document.getElementById('container');
    const button = event.target;

    if (
        !files ||
        {
            'previous': test - 1 < 0,
            'next': test + 1 >= files.length
        }[event.target.id]
    ) {
        return;
    }

    const nextTest = await readJSON(
        files[button.id === 'next' ? ++test : --test]
    );
    const progressBar = document.getElementById('progress');

    const progress = `${test * 100 / (files.length - 1)}%`;

    progressBar.style.width = progress;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    loadTest(nextTest);
}

const handleNext = async event => {
    const container = document.getElementById('container');

    if (test + 1 >= files.length) {
        
        return;
    }

    const nextTest = await readJSON(files[++test]);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    loadTest(nextTest);
}

const handleSave = event => {
    if (
        !questions ||
        questions.some(question => /www\.todotest\.com/.test(question.image))
    ) {
        return;
    }

    $.post(
        'http://localhost:3000/question/createMany',
        {questions},
        data => console.log('Preguntas introducidas correctamente')
    );
    
}

const imageToBase64 = src => new Promise((resolve, reject) => {
    const image = new Image;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        ctx.drawImage(image, 0, 0);

        resolve(canvas.toDataURL());
    }

    image.src = src;
});