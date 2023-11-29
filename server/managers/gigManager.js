const Gig = require('../models/Gig');

exports.create = async ({title, type, price, description, owner}) => {
    const gig = new Gig({title, type, price, description, owner});

    return gig.save();
}

exports.getAll = async function () {
    let gigs = await Gig.find().lean();

    // if (search) {
    //     cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    // }
    // if (from) {
    //     cubes = cubes.filter(cube => cube.difficultyLevel >= from);
    // }
    // if (to) {
    //     cubes = cubes.filter(cube => cube.difficultyLevel <= to);
    // }

    return gigs;
}

exports.getOne = async function (gigId) {
    const gig = Gig.findById(gigId).populate('owner').lean();
    return gig;
}