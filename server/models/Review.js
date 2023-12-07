const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    gigId: {
        type: mongoose.Types.ObjectId,
        ref: 'Gig'
    }
});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;