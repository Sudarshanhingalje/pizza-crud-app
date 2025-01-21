// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware setup
app.use(cors());                  // Enable CORS for all origins
app.use(express.json());           // Parse JSON request bodies

// Use book routes
app.use('/api/books', bookRoutes); // Mount the book routes

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
