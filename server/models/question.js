const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    question: String,
    answers: [
        {
            id: String,
            answer: String
        }
    ],
    correct: String,
    image: Buffer
})

module.exports = mongoose.model('Question', schema)