const express = require('express');
const config = require('config');
const connectDB = require('./config/db')

const app = express();

//Initialize Middleware:

app.use(express.json({ extended: false }));



// Connect to Mongo
connectDB();

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


//set port variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
