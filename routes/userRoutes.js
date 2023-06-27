const express = require('express')
const userRoutes = express.Router()
const userSchema = require("../models/user.model")
const {registerUser, loginUser} = require("../controllers/user.controller")

userRoutes.post('/register', 
    (req, res) => registerUser(req, res)
)

userRoutes.post('/login', 
    (req, res) => loginUser(req, res)
)

module.exports = userRoutes