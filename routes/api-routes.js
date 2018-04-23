const express = require('express');
const router = express.Router();
/* const passport = require('passport');
require('../config/passport')(passport); */
const userController = require('../controllers/user');



// SONGKICK API ROUTES

router.get('/api/city/:citySearch', userController.searchCity);





// -------------------- GET ROUTES
router.get('/api/user_data',  /* passport.authenticate('jwt', { session: false }), */ userController.getUserData); 


// ------------------- POST ROUTES

router.post('/api/new_user', /* passport.authenticate('jwt', { session: false }), */ userController.newUser);
// ------------------- PUT ROUTES

router.put('/api/new_user_festival', /* passport.authenticate('jwt', { session: false }), */ userController.newFest);


// ------------------- DELETE ROUTES */

module.exports = router;