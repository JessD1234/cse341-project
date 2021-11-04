var jsonEngine = require('../../controllers/prove8-controller');

const express = require('express');
const router = express.Router();


router.get('/', jsonEngine.processJson).post('/', jsonEngine.getIndex);
module.exports = router;