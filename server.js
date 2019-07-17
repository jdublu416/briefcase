const express = require('express');
const config = require('config');
const connectDB = require('./config/db')

const app = express();

//Initialize Middleware:

app.use(express.json({ extended: false }));

//Connect to database
const db = config.get('mongoURI');

// Connect to Mongo
connectDB();

//Define Routes
app.use('/users', require('./routes/api/users'));


//set port variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
