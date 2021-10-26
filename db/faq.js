const mongoose = require('mongoose')

const faqSchema = mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required.']
    }, answer: {
        type: String,
        required: [true, 'Answer is required.']
    }, askedOn: {
        type: Date,
        default: Date.now
    }, editedOn: [Date]
})

module.exports = mongoose.model('FAQ', faqSchema)