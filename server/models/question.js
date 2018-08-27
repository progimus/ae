const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
    id: String,
    answer: String
}, {
    _id: false
})

const questionSchema = new Schema({
    question: String,
    answers: [answerSchema],
    correctAnswer: String,
    image: String
})

module.exports = mongoose.model('Question', questionSchema)