const Review = require('../models/Review');
const Gig = require('../models/Gig')

exports.create = async({rating, owner, gigId}) => {
    const gig = await Gig.findById(gigId).populate('reviews');

    for(rev of gig.reviews) {
        if(rev.owner == owner._id) {
            throw new Error('Cannot review same gig again');
        }
    }

    const review = new Review({rating, owner, gigId});

    await Gig.findByIdAndUpdate(gigId, {$push: {reviews: review._id}});

    return review.save();
}

exports.getOne = async(reviewId) => {
    const review = Review.findById(reviewId).lean();
    
    return review;
}