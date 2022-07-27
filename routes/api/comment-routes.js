const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');

const router = require('express').Router();


router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);


module.exports = router;