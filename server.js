const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const restaurantRoutes = require('./routes/hotel.routes.js');
const itemRoutes = require('./routes/item.routes.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/restaurant', restaurantRoutes);
app.use('/item', itemRoutes);

// MongoDB Connection
mongoose
  .connect(//add ur database code)
    
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port  http://localhost:${PORT}`));
  })
  
  .catch((error) => console.error('MongoDB connection error:', error));
