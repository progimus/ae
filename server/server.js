// Importing express module
const express = require('express')
const app = express()

// Importing config file/s
const databaseConfig = require('./config/database')

// Add body parser middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '1000mb'}));
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}));

// Creating mongoose connection
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect(databaseConfig.url)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Importing routes
const questionRoutes = require('./routes/question')
app.use('/question', questionRoutes)

// Starting the server
app.listen(
    3000,
    () => console.log('Server running on port 3000.')
)