
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const festivalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type:String,
        required: true,
        unique: true
    },
    lineup_selection: {
        type: Array,
    },
    attending_friends: {
        type: Array,
    }

});

const User_Festival = mongoose.model("User_Festival", festivalSchema);

module.exports = User_Festival;