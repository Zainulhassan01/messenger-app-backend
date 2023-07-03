const express = require('express')
const userRoutes = express.Router()
const {registerUser, loginUser, chatUser} = require("../controllers/user.controller")
const tokenVerification = require("../middleware/auth")

userRoutes.post('/register', 
    (req, res) => registerUser(req, res)
)

userRoutes.post('/login', 
    (req, res) => loginUser(req, res)
)

userRoutes.post('/Welcome',
    tokenVerification,
    (req, res) => chatUser(req, res)
)

module.exports = userRoutes