import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: trusted
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    nationality: {
        type: String,
        required: true
    },
    profile: {
        bio: {
            type: String
        },
        profilePhoto: {
            type: String,
            default: ""
        }
    },
    role: {
        type: String,
        enum: ['visitor', 'learner', 'schoolAdmin', 'Admin']
    },
}, {timestamps: true});

export default User = mongoose.model('User', userSchema);