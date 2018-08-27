const Question = require('../models/question')

exports.findAll = (req, res) => {
    Question.find((err, questions) => {
        if (err) throw err

        res.send(questions)
    })
}

exports.findRandom = (req, res) => {
    Question.count((err, count) => {
        if (err) throw err

        const random = Math.random() * count

        Question
            .find()
            .skip(random)
            .limit(1)
            .exec((err, question) => {
                if (err) throw err

                res.send(question)
            })
    })
}

exports.create = (req, res) => {
    const question = new Question({
        question: req.body.question,
        answers: req.body.answers,
        correctAnswer: req.body.correctAnswer,
        image: req.body.image
    })

    question.save((err) => {
        if (err) throw err

        res.send('Question inserted')
    })
}

exports.createMany = (req, res) => {
    req.body.questions.forEach(element => {

        Question.findOneAndUpdate(
            {
                question: element.question,
                answers: element.answers,
                correctAnswer: element.correctAnswer
            },
            {
                question: element.question,
                answers: [...element.answers],
                correctAnswer: element.correctAnswer,
                image: element.image
            },
            {
                upsert: true
            },
            (err) => {
                if (err) throw err
            }
        )
    })

    res.send('Questions updated or inserted')
}