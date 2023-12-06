const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.register = async ({username, password, repeatPassword}) => {
    if (await User.findOne({ username: username })) {
        throw new Error('Account already exists!');
    }

    if(password != repeatPassword) {
        throw new Error('Passwords must match!');
    }

    const user = await User.create({username, password, imageUrl: null});

    const result = getAuthResult(user);

    return result;
}

exports.login = async ({ username, password }) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password!');
    }

    const result = getAuthResult(user);

    return result;
}

exports.getOne = async function (userId) {
    const user = User.findById(userId).populate('gigs').lean();
    return user;
}

exports.changePicture = async function(userId, {imageUrl}) {
    const result = User.findByIdAndUpdate(userId, {imageUrl});

    return result;
}

exports.changeEmail = async function(userId, {email}) {
    const result = User.findByIdAndUpdate(userId, {email});

    return result;
}

function getAuthResult(user) {
    const payload = {
        _id: user._id,
        username: user.username,
    }

    // synchronous variant
    const token = jwt.sign(payload, 'SECRET', { expiresIn: '2d' });

    const result = {
        _id: user._id,
        username: user.username,
        accessToken: token,
    }

    return result;
}