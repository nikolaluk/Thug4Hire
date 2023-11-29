const router = require('express').Router();
const gigManager = require('../managers/gigManager');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', async (req,res) => {
    // const {search,from,to} = req.query;

    const gigs = await gigManager.getAll();

    res.json(gigs);
});


router.post('/create', isAuth, async (req, res) => {
    const { title } = req.body;
    const owner = req.user;
    console.log(owner);
    const result = await gigManager.create({ title, owner });
    res.json(result);
});

module.exports = router;