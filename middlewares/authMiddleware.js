const { User } = require('../models');

const adminOnly = async (req, res, next) => {
    if(!req.session.userID) {
        return res.status(403).send('You must be logged in to access this page.');
    }

    try{
        const user = await User.findByPk(req.session.userId);
        if (user.role !== 'admin'){
            return res.status(403).send('This page is restricted to admin users only. Contact your admin to manage users.')
        }
        next();
    } catch (error) {
        return res.status(500).send('Server error');
    }
};

module.exports = { adminOnly };