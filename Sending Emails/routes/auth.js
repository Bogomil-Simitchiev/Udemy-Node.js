const express = require('express');

const authController = require('../controllers/auth');
const isGuest = require('../middleware/is-guest');
const isAuth = require('../middleware/is-auth');


const router = express.Router();

router.get('/login', isGuest, authController.getLogin);

router.get('/signup', isGuest, authController.getSignup);

router.post('/login', isGuest, authController.postLogin);

router.post('/signup', isGuest, authController.postSignup);

router.post('/logout', isAuth, authController.postLogout);

module.exports = router;