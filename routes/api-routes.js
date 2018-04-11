const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// SONGKICK API ROUTES

router.get('/api/city/:citySearch', userController.searchCity);





// -------------------- GET ROUTES



// ------------------- POST ROUTES

router.post('/api/new_user', userController.newUser);
// ------------------- PUT ROUTES




// ------------------- DELETE ROUTES */

module.exports = router;