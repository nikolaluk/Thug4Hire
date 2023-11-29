const router = require('express').Router();
const gigManager = require('../managers/gigManager');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req,res) => {
    // const {search,from,to} = req.query;

    const gigs = await gigManager.getAll();

    res.json(gigs);
});

router.get('/:gigId', async (req,res) => {
    // const {search,from,to} = req.query;

    const gig = await gigManager.getOne(req.params.gigId);

    if(!gig){
        throw new Error('Gig not found');
    }

    res.json(gig);
});


router.post('/create', isAuth, async (req, res) => {
    const { title, type, price, description } = req.body;
    const owner = req.user;
    const result = await gigManager.create({ title, type, price, description, owner });
    res.json(result);
});

module.exports = router;