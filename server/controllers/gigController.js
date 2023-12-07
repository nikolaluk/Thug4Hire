const router = require('express').Router();
const gigManager = require('../managers/gigManager');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req,res) => {
    // const {search,from,to} = req.query;

    const gigs = await gigManager.getAll();

    res.json(gigs);
});

router.get('/:gigId', async (req,res) => {
    const gig = await gigManager.getOne(req.params.gigId);

    if(!gig){
        throw new Error('Gig not found');
    }

    res.json(gig);
});

router.put('/:gigId', isAuth, async (req, res) => {
    try {
        const gig = await gigManager.getOne(req.params.gigId);
        const isOwner = req.user?._id == gig.owner._id;

        if (!isOwner) {
            throw new Error('Unauthorized!');
        }

        const result = await gigManager.editOne(req.params.gigId, req.body);

        res.json(result);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
});

router.delete('/:gigId', isAuth, async (req,res) => {
    try {
        const gig = await gigManager.getOne(req.params.gigId);
        const isOwner = req.user?._id == gig.owner._id;

        if (!isOwner) {
            throw new Error('Unauthorized!');
        }

        const result = await gigManager.deleteOne(req.params.gigId);

        res.json(result);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
});


router.post('/create', isAuth, async (req, res) => {
    const { title, type, price, description } = req.body;
    const owner = req.user;
    const result = await gigManager.create({ title, type, price, description, owner });
    res.json(result);
});

module.exports = router;