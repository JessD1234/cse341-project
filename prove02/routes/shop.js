const express = require('express');

const path = require('path');

const routeFinder = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(routeFinder, 'views', 'shop.html'));
});

module.exports = router;