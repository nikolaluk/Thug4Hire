const Gig = require('../models/Gig');

exports.create = async ({owner, title}) => {
    const gig = new Gig({owner, title});

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
    console.log(gigs);

    return gigs;
}