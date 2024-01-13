const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/thoughts', thoughtRouter);
router.use('/users', userRouter);

module.exports = router;
