const express = require('express');

const routeFinder = require('../util/path');
const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(routeFinder, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.use('/users', (req, res, next) => {
    console.log('Users middleware');
    res.send('<h1>Users middleware</h1>');
});

module.exports = router;