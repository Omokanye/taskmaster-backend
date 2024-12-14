const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');  // Import your routes

dotenv.config();  // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());  // Parse JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);  // Link authentication routes

// Server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// server.js (continued)

const authMiddleware = require('./middleware/authMiddleware');

app.get('/api/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'This is a protected route' });
});
