//* Routing Logic

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const ensuredLoggedIn = require('../../config/ensureLoggedIn')


//* POST 
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);

//* ensuredLoggedIn is the protection and can be put in an array format if multiples are required
router.get('/check-token', [ensuredLoggedIn], usersCtrl.checkToken);


module.exports = router;