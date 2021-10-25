require('dotenv').config()
const e = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("DB connection established")
}).catch((e) => {
    console.log(e)
})