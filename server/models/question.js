const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    question: String,
    answers: [
        {
            id: String,
            answer: String
        }
    ],
    correctAnswer: String,
    image: String
})

module.exports = mongoose.model('Question', schema)