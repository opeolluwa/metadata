
import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase:true

    },
    url: {
        type: String,
        required: true,
        trim: true,
        lowercase:true

    },
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase:true,
    },
    iconUrl: {
        type: String,
        required: true,
        trim: true,
        lowercase:true,
    },
    meta: {
        like: [],
        comment: [{ user: String, comment: String }],
        clap: []
    },

});


export const Resource = mongoose.model("resource", ResourceSchema)