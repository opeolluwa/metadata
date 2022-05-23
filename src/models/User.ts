
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
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
    }

});


export const User = mongoose.model("user", UserSchema)