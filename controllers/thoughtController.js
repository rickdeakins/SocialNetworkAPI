const { User, Thought, Reaction } = require("../models");

module.exports = {
  //Thought Functions
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      console.log("before thought query");
      const thoughts = await Thought.find(); //.populate('user');
      console.log("after thought:", thoughts);
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }); //.populate('users');
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought
  async createNewThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update a thought
  async editSingleThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteSingleThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      await Thought.deleteMany({ _id: { $in: thought.Users } });
      res.json({ message: "Thought deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Reaction functions
  // Get all reactions
  async getAllReactions(req, res) {
    try {
      const reaction = await Reaction.find().populate("Reactions");
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single reaction
  async getSingleReaction(req, res) {
    try {
      const reaction = await Thought.findOne({
        _id: req.params.thoughtId,
      }).populate("reactions");
      if (!reaction) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a reaction
  // async createNewReaction(req, res) {
  //   try {
  //     // const reaction = await Reaction.create(req.body);
  // const newReaction = await Thought.findById(req.params.thoughtId);
  // if (!Thought) {
  //   return res.status(404).json({ message: 'Thought not found' });
  // }
  //     res.json(newReaction);
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json(err);
  //   }
  // },

  async createNewReaction(req, res) {
    try {
      const { reactionBody, userName } = req.body;

      // Find the Thought document by ID
      const thought = await Thought.findById(req.params.thoughtId);

      // Check if the thought exists
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      // Create a new Reaction document
      const newReaction = await Reaction.create({ reactionBody, userName });

      // Update the reactions field in the Thought document
      thought.reactions.push(newReaction);

      // Save the updated Thought document
      const updatedThought = await thought.save();

      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a reaction
  async deleteExistingReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndDelete({
        _id: req.params.reactionId,
      });
      if (!reaction) {
        return res.status(404).json({ message: "No reaction with that ID" });
      }
      res.json({ message: "Reaction deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
