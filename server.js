require('dotenv').config()
const { application } = require('express')
const express = require('express')
const mongoose = require('mongoose')


const connection = require('./db/connection')
const FAQ = require('./db/faq')
const faqRoutes = require('./routes/routes')

const app = express()

app.use(express.json())

app.use(faqRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

