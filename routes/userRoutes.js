const express = require('express')
const userRoutes = express.Router()
const userSchema = require("../model/user.model")

userRoutes.post('/register', 
    (req, res) => res.send('register path')
)

userRoutes.post('/login', 
    (req, res) => res.send('login path')
)

module.exports = userRoutes