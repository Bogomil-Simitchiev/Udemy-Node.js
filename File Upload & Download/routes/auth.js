const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const isGuest = require('../middleware/is-guest');
const isAuth = require('../middleware/is-auth');

const User = require('../models/user');

const router = express.Router();

router.get('/login', isGuest, authController.getLogin);

router.get('/signup', isGuest, authController.getSignup);

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail(),
    body('password', 'Password has to be valid.')
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
  ],
  isGuest,
  authController.postLogin
);

router.post(
  '/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('confirmPassword')
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords have to match!');
        }
        return true;
      })
  ],
  isGuest,
  authController.postSignup
);

router.post('/logout', isAuth, authController.postLogout);

router.get('/reset', isGuest, authController.getReset);

router.post('/reset', isGuest, authController.postReset);

router.get('/reset/:token', isGuest, authController.getNewPassword);

router.post('/new-password', isGuest, authController.postNewPassword);

module.exports = router;
