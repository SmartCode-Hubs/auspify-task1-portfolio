// 1. DNS FIX FOR WINDOWS (Forces reliable connection to MongoDB Atlas)
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// 2. Load Environment Variables
dotenv.config();

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json());

// 4. Import Models
const Message = require('./models/Message');
// const Student = require('./models/Student'); // Uncomment when we do Task 2

// ==========================================
// ROUTES
// ==========================================

// Health Check
app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', message: 'API is running' });
});

// Contact Form
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

// ==========================================
// SERVER & DATABASE STARTUP
// ==========================================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // Connect to MongoDB FIRST
        await mongoose.connect(process.env.MONGO_URI);
        console.log('[Database] MongoDB Connected Successfully');

        // THEN start the Express server
        app.listen(PORT, () => {
            console.log(`[Server] Running on port ${PORT}`);
        });
    } catch (err) {
        console.error('[Database] Connection Error:', err.message);
        process.exit(1); // Stop the server if DB connection fails
    }
};

startServer();