const listEndpoints = require('express-list-endpoints')
const userPrompt = require("./UserInterface/interface")
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connectDb = require("./config/database")
connectDb()
const userRoutes = require("./routes/userRoutes")

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use(
    '/api',
    userRoutes
)

console.log(listEndpoints(app))

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
    userPrompt
})