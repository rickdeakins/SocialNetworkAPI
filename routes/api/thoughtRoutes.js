const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createNewThought,
  editSingleThought,
  deleteSingleThought,
} = require("../../controllers/ThoughtController");

// /api/Thoughts
router.route("/").get(getAllThoughts).post(createNewThought);

// /api/Thoughts/:ThoughtId
router
  .route("/:ThoughtId")
  .get(getSingleThought)
  .put(editSingleThought)
  .delete(deleteSingleThought);

module.exports = router;
