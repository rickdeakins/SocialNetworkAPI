const { connect } = require('mongoose');

const connectionString = 'mongodb://localhost:27017/socialDB';

module.exports = async () => {
  try {
    await connect(connectionString);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};