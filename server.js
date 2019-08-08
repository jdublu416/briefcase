const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Initialize Middleware:
app.use(express.json({ extended: false}));

// Connect to Mongo
connectDB();

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/interview', require('./routes/api/interview'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
