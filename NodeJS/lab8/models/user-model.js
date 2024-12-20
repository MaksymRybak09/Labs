const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
require('dotenv').config();

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0 || value > 120) {
                throw new Error('Age must be between 0 and 120');
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not valid`,
        }
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: false,
        }
    }],
}, { 
    versionKey: false,
    toJSON: { virtuals: true, },
});

userSchema.virtual('articles', {
    ref: 'Article',
    localField: '_id',
    foreignField: 'users',
});

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.statics.findOneByEmail = async (email, password) => {
    const user = await User.findOne({email});
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    return user;
};

userSchema.methods.generateToken = async function() {
    const token = jwt.sign({_id: this._id.toString()}, process.env.JWT_SECRET);
    this.tokens.push({token});
    await this.save();
    return token;
};

const User = mongoose.model("users", userSchema);
module.exports = User;