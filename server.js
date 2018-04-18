// set up ======================================================================
// get all the tools we need
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const bodyParser = require('body-parser');

const apiRoutes = require('./routes').apiRoutes;
/* const authRoutes = require('./routes').authRoutes; */


// configuration ===============================================================
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(apiRoutes);
/* app.use(authRoutes); */



const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/festies"; // connect to our database
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI); 

// launch ======================================================================
app.listen(PORT);
console.log('The magic happens on port ' + PORT);