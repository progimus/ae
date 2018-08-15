// Importing express module
const express = require('express')
const app = express()

// Importing config file/s
const databaseConfig = require('./config/database')

// Creating mongoose connection
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect(databaseConfig.url)

// Starting the server
app.listen(
    3000,
    () => console.log('Server running on port 3000.')
)

// Importing routes
const questionRoutes = require('./routes/question')
app.use('/question', questionRoutes)

//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json())