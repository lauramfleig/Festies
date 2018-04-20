


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = require('mongodb');
const apiKey = require('../keys').songkick_api_key;
const axios = require('axios');
const bcrypt = require('bcrypt-nodejs');

// ------------------------- DB MONGOOSE SCHEMA

const UserSchema = new Schema({

    user_screen_name: {
        type: String,
        unique: true
    },

    username: {
        type: String,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    age: {
        type: String,
    },

    gender: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    about_description: {
        type: String,
        
    },

    favorite_festival_experience: {
        type: String
    },
    
    festivals_attending: [{
        type: Schema.Types.ObjectId,
        ref: "User_Festival",
        
    }]
    
});

// ---------------------------- METHODS ON THE SCHEMA

// ------------- PASSPORT AUTH

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};


// ------------ SONGKICK API CALLS

UserSchema.statics.festiesSearchByCity = function(cityObject, callback) {

    console.log(cityObject + '*************************');
    const songKickQuery = `http://api.songkick.com/api/3.0/search/locations.json?query=${cityObject}&type=Festival&apikey=${apiKey}`;

    axios.get(songKickQuery)
    .then(function(response){
        const cityID = response.data.resultsPage.results.location[0].metroArea.id;
        console.log(response.data.resultsPage.results.location[0].metroArea.id + ' >************* CITY ID *****************<');
        
        const festivalQuery = `http://api.songkick.com/api/3.0/events.json?location=sk:${cityID}&type=Festival&apikey=${apiKey}`;
        
        axios.get(festivalQuery)
        .then(function(response){

            const festivalResults = response.data.resultsPage.results.event;
            console.log(festivalResults);
            console.log(festivalResults[0].performance);

            let filteredFestiesArray = festivalResults.filter(festival => festival.performance.length > 5);

            callback(filteredFestiesArray);
        })
        .catch(function(error){
            console.log(error);
        });
    }) 
    .catch(function(error){
        console.log(error);
    });

}

// ------------- GET


// ------------- POST

UserSchema.statics.newUserEntry = function (newUserObject, callback) {

    const userEmail = newUserObject.userEmail;
    const newUserData = {
        user_screen_name: newUserObject.user_screen_name,
        username: newUserObject.username,
        age: newUserObject.age,
        gender: newUserObject.gender,
        about_description: newUserObject.about_description,
        favorite_festival_description: newUserObject.favorite_festival_description,
    };

    User.where({email: userEmail}).update({ ...newUserData })
    .then(function(response) {
        callback(response);
    }).catch(err => console.log(err));
}

// ------------- PUT


// ------------- DELETE



const User = mongoose.model("User", UserSchema);

module.exports = User;