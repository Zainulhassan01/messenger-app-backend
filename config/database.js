const mongoose = require('mongoose')
require('dotenv').config();

const db = mongoose.connect(
    process.env.DB_URL,
)

const connectDb = () =>{
    db.then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("Something went wrong in Db connection", err))
}

module.exports = connectDb