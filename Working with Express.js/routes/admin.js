const path = require('path');
const fs = require('fs');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res) => {
    fs.writeFileSync('text.txt', req.body.title);
    res.redirect('/');
});

module.exports = router;