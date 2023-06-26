const { Router } = require('express');

const router = Router();

const users = [];

router.get('/add-user', (req, res) => {
    res.render('addUser', { pageTitle: 'Add user' })
})

router.post('/add-user', (req, res) => {
    const info = req.body;
    if (info.name != '') {
        users.push({ name: info.name })
        res.redirect('/');
    }
    res.redirect('/add-user');
})

module.exports = {
    router,
    users
}