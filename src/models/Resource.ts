import mongoose from "mongoose";
const ResourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,

    },
    url: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    avatarUrl: {
        type: String,
        // required: true,
        trim: true,
        lowercase: true,
    },
    category: [],
    meta: {
        like: [],
        comment: [{ username: String, comment: String }],
        clap: []
    },

});


export const Resource = mongoose.model("resource", ResourceSchema)