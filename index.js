const userPrompt = require("./UserInterface/interface")
const express = require('express')
const app = express()

const connectDb = require("./config/database")
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
    userPrompt
})