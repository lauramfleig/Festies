
const userModel = require('../models').User;


// SONGKICK API CALLS

exports.searchCity = function(req, res) {
    userModel.schema.statics.festiesSearchByCity(req.params.citySearch, function(response){

        console.log(response.data.resultsPage.results);
        res.send(response.data.resultsPage.results);
        
    });
    
}


// ----------------- GET CONTROLLERS



// ----------------- POST CONTROLLERS

exports.newUser = function(req, res) {
    const newUserObject = req.body;
    userModel.schema.statics.newUserEntry(newUserObject, function(response){

        res.send(response);
    });
}
// ----------------- PUT CONTROLLERS


// ----------------- DELETE CONTROLLERS