const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const router = express.Router();
const { adminOnly } = require('../middlewares/authMiddleware');

// display the user creation form.
router.get('/register-user', adminOnly, (req, res) => {
    res.render('registerUser', {title: 'Register User' });
});

// handles creation of new user
router.post('/register-user', async(req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    try{
        const newUser = await User.create({
            username,
            password: hashedPassword
        });
        res.json({ user: newUser });
    } catch (error) {
        res.status(400).send({ error: 'Error creating user. Check if the user already exists.' });
    }
});

module.exports = router;