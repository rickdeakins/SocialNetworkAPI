const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createNewThought,
  editSingleThought,
  deleteSingleThought,
  createNewReaction,
  deleteExitingReaction
} = require("../../controllers/ThoughtController");

// /api/Thoughts
router.route("/").get(getAllThoughts).post(createNewThought);

// /api/Thoughts/:ThoughtId
router
  .route("/:ThoughtId")
  .get(getSingleThought)
  .put(editSingleThought)
  .delete(deleteSingleThought);

// /api/Thoughts/:ThoughtId/reactions
router.route("/api/thoughts/:thoughtId/reactions")
  .post(createNewReaction)
  .delete(deleteExitingReaction)


module.exports = thoughtRouter;
