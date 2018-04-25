
const userModel = require('../models').User;


/* const getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
}; */



// SONGKICK API CALLS

exports.searchCity = function(req, res) {

    /* const token = getToken(req.headers); */

    /* if(token){ */
        userModel.schema.statics.festiesSearchByCity(req.params.citySearch, function(response){
    
            console.log(response);
            res.send(response);
            
        });

    /* }else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    } */

    
}


// ----------------- GET CONTROLLERS

exports.getUserData = function (req, res) {
    const userEmail = req.body;
    userModel.schema.statics.userData(userEmail, function (response) {

        res.send(response);
    });
}

exports.getUserMatches = function (req, res) {
    const festival = req.body;
    userModel.schema.statics.userMatches(festival, function (response) {

        res.send(response);
    });
}
// ----------------- POST CONTROLLERS

exports.newUser = function(req, res) {
    const newUserObject = req.body;
    userModel.schema.statics.newUserEntry(newUserObject, function(response){

        res.send(response);
    });
}

// ----------------- PUT CONTROLLERS

exports.newFest = function(req, res) {
    const newFestivalObject = req.body;
    userModel.schema.statics.updateUserFestival(newFestivalObject, function(response){
        res.send(response);
    });
}

// ----------------- DELETE CONTROLLERS