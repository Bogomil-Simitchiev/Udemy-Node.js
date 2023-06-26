const { Router } = require('express');

const router = Router();

const users = require('./addUser');

router.get('/', (req, res) => {
    res.render('main', { pageTitle: 'Main page', users: users.users })
})

module.exports = router;