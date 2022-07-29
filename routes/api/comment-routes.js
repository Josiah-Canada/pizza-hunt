const {
    addComment,
    removeComment,
    addReply,
    removeReply,
    updateComment
  } = require('../../controllers/comment-controller');

const router = require('express').Router();


router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)
  .put(updateComment)

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

router.route('/:pizzaId/:commentId/:replyId').put(updateComment)

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);


module.exports = router;