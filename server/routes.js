const router = require('express').Router();

// NOTE: Placeholder Info Below

const userController = require('./controllers/userController');
const gigController = require('./controllers/gigController');
const reviewController = require('./controllers/reviewController');

router.use('/users', userController);
router.use('/gigs', gigController);
router.use('/reviews', reviewController);

module.exports = router;