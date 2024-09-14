const express = require('express');
const familyRoutes = require('./api/route/familyRoutes');
const mongoose = require('mongoose');
const app = express();


// Connect to MongoDB
mongoose.connect('mongodb://localhost/familytree', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));


app.use(express.json());

// Register Routes
app.use('/api/family', familyRoutes);

module.exports = app;
