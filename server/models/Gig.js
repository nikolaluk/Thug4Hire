const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
    },
});


const Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;