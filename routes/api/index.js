const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const pizzaRoutes = require('./pizza-routes')

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/pizzas', pizzaRoutes)

const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;