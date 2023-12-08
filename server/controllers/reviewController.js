const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const reviewManager = require('../managers/reviewManager');

router.get('/:reviewId', async(req,res) => {
    try {
        const review = await reviewManager.getOne(req.params.reviewId);

        if(!review) {
            throw new Error("Review doesn't exist!");
        }

        res.json(review);
    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: err.message,
        })
    }
})

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