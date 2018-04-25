

const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt-nodejs');

router.post('/register', function (req, res) {
    console.log('++++++++++++');
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        let newUser = new User({
            email: req.body.email,
            password: req.body.password
        });
        console.log(newUser);
        // save the user
        newUser.save(function (err) {
            
            if (err) {
                console.log(err);
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
});

router.post('/login', function (req, res) {
    console.log(req.body.email + '++++++++++++');
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        console.log(user)

        if (!user) {
            console.log('401 time amigo user not found')
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            console.log('password compare time')
            console.log(req.body.password)
            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                console.log('the password compare result is ' + result)
                // if user is found and password is right create a token
                if (result && !err) {
                    let token = jwt.sign(user.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({ success: true, token: 'JWT ' + token });
                } else {
                    console.log('another 401 time because passw failed')
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            })

        }
    });
});

module.exports = router;