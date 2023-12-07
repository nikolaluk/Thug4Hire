const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Review',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});


const Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;