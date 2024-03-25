const express = require('express');
const router = express.Router();

// homepage
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// login page
router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'})
});

module.exports = router;