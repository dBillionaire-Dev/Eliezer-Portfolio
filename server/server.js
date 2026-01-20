const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/databases/db');
const path = require('path');

// Connect to MongoDB
connectDB();

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const projectRoutes = require('./src/routes/projectRoutes');
const messageRoutes = require('./src/routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ 
  extended: true 
})
);
app.use(cors({ 
  origin: ['https://impulse-grid.vercel.app', 'https://impulse-grid.vercel.app/'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization'
})
); 

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/projects', projectRoutes);


app.get('/', (req, res) => {
  res.send('Hello, World! This is Eliezer Portfolio Backend Server.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
