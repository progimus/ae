const selectAnswers = (answer) => {
    const a = document.querySelectorAll('.tbl_nums_pregs .idx_p');
    const inputs = document.querySelectorAll('.resp.hov.a');
    a.forEach(a => a.classList.add('p_contest_idx'));
    inputs.forEach(input => input.classList.add('p_contest'));
}
const checkTest = () => {
    const button = document.getElementById('b_corregir');
    button.click();
}
const addTest = () => {
    const lis = document.querySelectorAll('#pilatest_container li');
    lis.forEach(li => {
        let question = {
            question: li.querySelector('.preg').textContent.replace(/^\d{1,2}. /, ''),
            answers: [...li.querySelectorAll('.resp')].reduce((a, b, i) => {
                console.log(b.textContent)
                a.push({
                    id: String.fromCharCode(97 + i),
                    answer: b.textContent.replace(/^\w\)\s/g, '')
                });

                return a;
            }, []),
            correctAnswer: li.querySelector('.p_cor > b').textContent[0]
        };

        const image = li.querySelector('.img_p');
        if (image) question.image = image.src;
        questions.push(question);
    });
}
const downloadTests = () => {
    const link = document.createElement('a');
    const content = JSON.stringify(questions);
    const id = parseInt(document.querySelector('.tit span').textContent.split(' ')[1]);
    link.id = 'download1234';
    link.appendChild(document.createTextNode('asdasdasd'));
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    link.setAttribute('download', `test${id}.json`);
    document.body.appendChild(link);
    link.click();
}
const questions = [];
selectAnswers(); checkTest();




addTest(); downloadTests();





document.querySelector('.spr.boto_gen.bnou_t.ldr1').click();






/*const nextTest = () => {
    const nextTestId = parseInt(document.querySelector('.tit span').textContent.split(' ')[1]) + 1;
    const url = `https://www.todotest.com/tests/test.asp?tip=3&t=${nextTestId}`;
    window.location.replace(url);
}
nextTest();*/