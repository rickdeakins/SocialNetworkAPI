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
  deleteExistingReaction,
} = require("../../controllers/thoughtController");

//Thoughts
//GET all Thoughts
router
  .route(getAllThoughts);

// Create NEW Thought
router.route("/").get(getAllThoughts).post(createNewThought);

// Get/Edit/Delete Single Thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(editSingleThought)
  .delete(deleteSingleThought);

//Reactions  
// Get ALL Reactions
router
  .route("/api/thoughts/:thoughtId/")
  .get(getAllReactions);

// Create NEW Reaction
// router.route("/api/thoughts/:thoughtId/reactions")
//   .post(createNewReaction);  

  router.post("/:thoughtId/reactions", createNewReaction);

// Get/Delete Single Reaction
router
  .route("/api/thoughts/:thoughtId/reactions/:reactionId")
  .get(getSingleReaction)
  .delete(deleteExistingReaction);




module.exports = router;
