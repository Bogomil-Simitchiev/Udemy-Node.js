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

router.get('/reset', isGuest, authController.getReset);

router.post('/reset', isGuest, authController.postReset);

router.get('/reset/:token', isGuest, authController.getNewPassword);

router.post('/new-password', isGuest, authController.postNewPassword);

module.exports = router;
