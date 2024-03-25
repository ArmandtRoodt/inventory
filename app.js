const express = require('express');
const viewRoutes = require('./routes/viewRoutes')
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Use EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files are here
app.use(express.static('public'));

// homepage
app.get('/', (req, res) => {
    res.render('homepage', { title: 'Home' });
});


// view routes
app.use(viewRoutes);

// authenication
app.use(authRoutes);

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}')
})