const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find().populate('users');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).populate('users');
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      await Thought.deleteMany({ _id: { $in: thought.Users } });
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};