
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const festivalSchema = new Schema({
    festivalData: {
        type: Array,
        required: true
    },
    attending_friends: {
        type: Array,
    }

});

const User_Festival = mongoose.model("User_Festival", festivalSchema);

module.exports = User_Festival;