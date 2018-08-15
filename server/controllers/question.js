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