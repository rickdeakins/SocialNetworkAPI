const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createNewThought,
  editSingleThought,
  deleteSingleThought,
  getAllReactions,
  getSingleReaction,
  createNewReaction,
  editSingleReaction,
  deleteExistingReaction
} = require("../../controllers/ThoughtController");

// /api/Thoughts
router.route("/").get(getAllThoughts).post(createNewThought);

// /api/Thoughts/:ThoughtId
router
  .route("/:ThoughtId")
  .get(getSingleThought)
  .post(createNewThought)
  .put(editSingleThought)
  .delete(deleteSingleThought);

// /api/Thoughts/:ThoughtId/reactions
router.route("/api/thoughts/:thoughtId/reactions")
  .post(createNewReaction)
  .put(editSingleReaction)
  .delete(deleteExistingReaction)


module.exports = router;
