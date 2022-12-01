const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./newexpenseRoutes');

router.use('/users', userRoutes);
router.use('/expense', expenseRoutes);

module.exports = router;