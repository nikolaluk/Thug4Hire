const router = require('express').Router();

// NOTE: Placeholder Info Below

const userController = require('./controllers/userController');
// const estateController = require('./controllers/estateController');
// const rentController = require('./controllers/rentController');

router.use('/users', userController);
// router.use('/estates', estateController);
// router.use('/rents', rentController)

module.exports = router;