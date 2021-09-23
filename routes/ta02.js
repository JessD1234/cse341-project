//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let users = [];

router.post('/addUser', (req, res, next) => {
  users.push(req.body.userName);
  console.log(req.body.userName);
  res.writeHead(302, {location: '/ta02'});
  res.end();
});

router.post('/removeUser', (req, res, next) => {
  users = users.filter(user => user != req.body.userName);
  res.write('ta02');
  res.end();
});

router.get('/', (req, res, next) => {
  res.render('pages', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});



module.exports = router;
