const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

// DB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shaktidental')
.then(() => {
    console.log('Connected to MongoDB successfully');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
