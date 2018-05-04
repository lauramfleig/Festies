const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
const userController = require('../controllers/user');



// SONGKICK API ROUTES

router.get('/api/city/:citySearch', userController.searchCity);





// -------------------- GET ROUTES

//passing session email to db - need to rewrite code on frontend to make these get requests
router.get('/api/user_data/:email', passport.authenticate('jwt', { session: false }),  userController.getUserData);

router.get('/api/find_matches/:email/:festival', passport.authenticate('jwt', { session: false }), userController.getUserMatches); 


// ------------------- POST ROUTES

router.post('/api/new_user', userController.newUser);
// ------------------- PUT ROUTES

router.put('/api/new_user_festival', passport.authenticate('jwt', { session: false }), userController.newFest);

router.put('/api/new_friend', passport.authenticate('jwt', { session: false }), userController.newFriend);


// ------------------- DELETE ROUTES */

module.exports = router;