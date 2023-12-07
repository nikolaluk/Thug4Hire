const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const reviewManager = require('../managers/reviewManager');

router.post('/:gigId', isAuth, async (req, res) => {
    try {
        const { rating } = req.body;
        const owner = req.user;
        const result = await reviewManager.create({ rating, owner, gigId: req.params.gigId });
        res.json(result);
    } catch (err) {
        res.status(403).json({
            message: err.message,
        })
    }
});

module.exports = router;