const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');
const todoRoutes = require('./todoRoutes');

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);
router.use('/todo', todoRoutes);

module.exports = router;
