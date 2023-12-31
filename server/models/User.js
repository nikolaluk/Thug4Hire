const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
    email: {
        type: String || null,
    },
    imageUrl: {
        type: String || null,
    },
    gigs: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Gig'
        }
    ]
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;