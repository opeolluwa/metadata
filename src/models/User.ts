
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    activated: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

});


export const User = mongoose.model("user", UserSchema)