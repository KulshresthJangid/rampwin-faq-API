const mongoose = require('mongoose')

const faqSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    }, answer: {
        type: String,
        required: true
    }, askedOn: {
        type: Date,
        default: Date.now
    }, editedOn: {
        type: Date
    }
})

module.exports = mongoose.model('FAQ', faqSchema)