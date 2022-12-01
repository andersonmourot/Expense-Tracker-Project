// Requiring and connecting the routes and router
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./newexpenseRoutes');

// all of these routes are prefixed with "/api"
router.use('/users', userRoutes);
router.use('/expense', expenseRoutes);

module.exports = router;