const { Schema, model } = require('mongoose');

// Schema to create USER model
const userSchema = new Schema(
    {
      first: {
        type: String,
        required: true,
        max_length: 30,
    },
    thoughts: [thoughtsSchema],
    reactions: [reactionsSchema],
    },   
    {
      toJSON: {
        getters: true,
      },
    });
    
    
const User = model('user', userSchema);

module.exports = User;