const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
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
      }
    }
  );
  
  const Reaction = model('Reaction', reactionSchema);
  module.exports = Reaction;