const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

const FAQ = require('../db/faq')

router.get('/', (req, res) => {
    res.send('Server is running.')
})

router.get('/allFAQ', async (req, res) => {
    try {
        await  FAQ.find({}).then((result) => {
            res.status(200).send(result)
        })
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.post('/newFAQ', async (req, res) => {
    try {
        const newFAQ = new FAQ({
            question: req.body.question,
            answer: req.body.answer
        })
        await newFAQ.save()
        res.status(200).send(newFAQ)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.patch('/editFAQ/:id',async (req, res) => {
    try {
        FAQ.findOne({ _id: req.params.id }).then((result) => {

            if (!result) {
                res.send("No such FAQ.")
            }

            result.question = req.body.question
            result.answer = req.body.question
            result.editedOn.push(Date.now())
            
            result.save()
            res.status(200).send(result)
        })
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.delete('/delete/:id',async (req, res) => {
    
    try {
        await FAQ.findByIdAndDelete({ _id: req.params.id }).then((result) => {
            res.send("The FAQ is deleted")
        })
    } catch (e) {
        res.status(400).send(e.message)
    }
    
})

module.exports = router