const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');

const userCount = async () => {
  const numberOfUsers = await User.aggregate([
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
      },
    },
  ]);

  return numberOfUsers[0].count;
};

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      const userObj = { users, userCount: await userCount() };
      return res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .lean();

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async editSingleUser(req, res) {
    try {
      console.log('You are updating an existing user');
      console.log(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: { username: req.body.username, email: req.body.email } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No users can be found with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      return res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};