const Gig = require('../models/Gig');
const User = require('../models/User')

exports.create = async ({title, type, price, description, owner}) => {
    const gig = new Gig({title, type, price, description, owner});

    await User.findByIdAndUpdate(owner._id, { $push: { gigs: gig._id } });

    return gig.save();
}

exports.editOne = async function (gigId, {title, type, price, description, owner}) {
    return Gig.findByIdAndUpdate(gigId, {title, type, price, description, owner});
}

exports.deleteOne = async function (gigId) {
    return Gig.findByIdAndDelete(gigId);
}

exports.getAll = async function () {
    let gigs = await Gig.find().populate('owner').lean();

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