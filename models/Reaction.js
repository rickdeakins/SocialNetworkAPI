// const mongoose = require('mongoose');
const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    userName: {
        type: String,
        required: true
      },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toISOString()
      }
    },
    {
      toJSON: {
        getters: true
      },
      id:false

    }
  );
  
  //review activity 25 - issue with model
  const Reaction = model('Reaction', reactionSchema);
  module.exports = Reaction;