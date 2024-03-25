const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    try{
        const newUser = await User.create({
            username,
            password: hashedPassword
        });
        res.json({ user: newUser });
    } catch (error) {
        res.status(400).send({ error: 'Error creating user.' });
    }
});

module.exports = router;