const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  editSingleUser,
  deleteSingleUser,
} = require("../../controllers/userController");

// GET all users
router.get("/", getAllUsers);

// POST a new user
router.post("/", createNewUser);

// GET a single user
router.get("/:userId", getSingleUser);

// PUT (edit) a single user
router.put("/:userId", editSingleUser);

// DELETE a single user
router.delete("/:userId", deleteSingleUser);

module.exports = router;  