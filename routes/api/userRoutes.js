const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  editSingleUser,
  deleteSingleUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getAllUsers).post(createNewUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .put(editSingleUser)
  .delete(deleteSingleUser);

module.exports = router;