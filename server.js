require('dotenv').config();
// set up ======================================================================
// get all the tools we need
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');


const apiRoutes = require('./routes').apiRoutes;

// configuration ===============================================================

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/festies"; // connect to our database
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI); 


    
// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(apiRoutes);



// routes ======================================================================
/* require('./app/routes.js')(app, passport); */ // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(PORT);
console.log('The magic happens on port ' + PORT);