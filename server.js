// set up ======================================================================
// get all the tools we need
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const apiRoutes = require('./routes').apiRoutes;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/festies"; // connect to our database
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI); 

// configuration ===============================================================

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(apiRoutes);



// launch ======================================================================
app.listen(PORT);
console.log('The magic happens on port ' + PORT);