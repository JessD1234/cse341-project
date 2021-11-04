
const express = require('express');
const router = express.Router();

/* Is this needed anymore?

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
}); */

var jsonEngine = require('../controllers/prove8-controller');


router.get('/', jsonEngine.processJson).post('/', jsonEngine.getIndex);

module.exports = router;