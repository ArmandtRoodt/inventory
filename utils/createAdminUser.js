const { User } = require('../models');
const bcrypt = require('bcryptjs');

async function createAdmin(username, password) {
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        const newUser = await User.create({
            username,
            password: hashedPassword,
            role: 'admin'
        });
        console.log('Admin user created successfully:', newUser.username);
    } catch(error) {
        console.error('Failed to create admin user:', error);
    }
}

// Command line arguments for username and password
const [username, password] = process.argv.slice(2);

// Special case: A user does not provide a password or username. Display a usage tip.
if(!username || !password) {
    console.log('Usage: node createAdminUser.js <username> <password>')
} else {
    createAdmin(username, password);
}