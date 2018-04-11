


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = require('mongodb');
const apiKey = require('../keys').songkick_api_key;
const axios = require('axios');

// ------------------------- DB MONGOOSE SCHEMA

const UserSchema = new Schema({

    user_screen_name: {
        type: String,
        required: true,
        unique: true
    },

    user_name: {
        type:String,
        required:true,
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
        required: true
    },

    favorite_festival_experience: {
        type: String
    },
    
    festivals_attending: [{
        type: Schema.Types.ObjectId,
        ref: "User_Festival",
        required: true
    }]
    
});

// ---------------------------- METHODS ON THE SCHEMA

// ------------ SONGKICK API CALLS

UserSchema.statics.festiesSearchByCity = function(cityObject, callback) {

    console.log(cityObject + '*************************');
    const songKickQuery = `http://api.songkick.com/api/3.0/search/locations.json?query=${cityObject}&apikey=${apiKey}`;

    axios.get(songKickQuery)
    .then(function(response){
        
        callback(response);
    }) 
    .catch(function(error){
        console.log(error);
    });

}

// ------------- GET


// ------------- POST

UserSchema.statics.newUserEntry = function (newUserObject, callback) {

    User.create({ ...newUserObject })
    .then(function(response) {
        callback(response);
    }).catch(err => console.log(err));
}

// ------------- PUT


// ------------- DELETE



const User = mongoose.model("User", UserSchema);

module.exports = User;