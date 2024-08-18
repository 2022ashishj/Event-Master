const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const environment = require('./config/environment');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authMiddleware = require('./middleware/authMiddleware');


const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 
app.use(helmet()); 
app.use(morgan('dev')); 

// Connect to the database
mongoose.connect(environment.mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', authMiddleware, eventRoutes);
app.use('/api/registrations', authMiddleware, registrationRoutes);
app.use('/api/feedback', authMiddleware, feedbackRoutes);


function startServer(port) {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}`);
        startServer(port + 1);
      } else {
        console.error(err);
      }
    });
  }
  
  const PORT = environment.port || 5000;
  startServer(PORT);
