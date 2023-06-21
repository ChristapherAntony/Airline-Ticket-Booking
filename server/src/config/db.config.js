// db.js

import mongoose from 'mongoose';
import config from './env.config.js';


const connectDb = async () => {
  // Connect to MongoDB
  mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Event handlers for MongoDB connection
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB...🍃');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  // Gracefully close the MongoDB connection on application termination
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
};

export default connectDb;
