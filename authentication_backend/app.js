const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB

try {
  connectDB(); // Assuming this is your database connection function
} catch (error) {
  console.error('Database connection failed:', error);
}
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
