require('dotenv').config()
const User = require("../models/user.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userPrompt = require("../UserInterface/interface")



const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
    
        if (!(email && password && name)) {
          res.status(400).send("All input is required")
        }
    
        const oldUser = await User.findOne({ email })
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login")
        }
    
        encryptedPassword = await bcrypt.hash(password, 10)
    
        const user = await User.create({
          name,
          email: email.toLowerCase(),
          password: encryptedPassword,
        })
    
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        )

        user.token = token
    
        res.status(201).json(user)
      } catch (err) {
        console.log(err)
      }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
    
        if (!(email && password)) {
          res.status(400).send("All input is required")
        }

        const user = await User.findOne({ email })
    
        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          )
    
          user.token = token
    
          return res.status(200).json(user)
        }
        res.status(400).send("Invalid Credentials")
      } catch (err) {
        console.log(err)
      }
}

const chatUser = async(req, res) => {
    let result = userPrompt('How are you?')
    res.send(result)
}

module.exports = {registerUser, loginUser, chatUser}