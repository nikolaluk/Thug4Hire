const router = require('express').Router();

// NOTE: Placeholder Info Below

const userController = require('./controllers/userController');
const gigController = require('./controllers/gigController');
// const rentController = require('./controllers/rentController');

router.use('/users', userController);
router.use('/gigs', gigController);
// router.use('/rents', rentController)

module.exports = router;