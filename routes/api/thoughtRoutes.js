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
  deleteExistingReaction,
} = require("../../controllers/thoughtController");

// /api/Thoughts
router.route("/").get(getAllThoughts).post(createNewThought);

// /api/Thoughts/:ThoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(editSingleThought)
  .delete(deleteSingleThought);

// /api/Thoughts/:ThoughtId/reactions
router.route("/api/thoughts/:thoughtId/reactions").post(createNewReaction);

// /api/Thoughts/:ThoughtId/reactions/reactionId
router
  .route("/api/thoughts/:thoughtId/reactions/:reactionId")
  .put(editSingleReaction)
  .delete(deleteExistingReaction);

module.exports = router;
