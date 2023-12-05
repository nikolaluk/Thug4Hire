const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async (req,res) => {
    try{
        const result = await userManager.register(req.body);

        res.json(result);
    } catch(err){
        console.log(err);
        res.status(400).json({
            message: err.message,
        })
    }
});

router.post('/login', async (req,res) => {
    try {
        const result = await userManager.login(req.body);

        res.json(result);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
});

router.get('/logout',(req,res) => {
    res.end();
});

router.get('/:userId', async (req,res) => {
    const user = await userManager.getOne(req.params.userId);

    if(!user) {
        throw new Error('User not found!');
    }

    res.json(user);
});

router.put('/changePicture/:userId', async (req,res) => {
    try {
        const result = await userManager.changePicture(req.params.userId, req.body)

        res.json(result);
    } catch(err) {
        res.status(400).json({
            message: err.message,
        })
    }
})

module.exports = router;