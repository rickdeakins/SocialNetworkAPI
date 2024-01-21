const { Schema, model } = require('mongoose');
// const Reaction = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      getters: true
    },
    userName: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Reaction'
    },
  ]
  },
  {
    toJSON: {
      getters: true
    },
  id:false

  }
);

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;