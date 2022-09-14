import mongoose from "mongoose";
/**
 * the allowed categories
 */
export enum RESOURCE_CATEGORIES {
    ANIMATION = "animation",
    GRADIENT = "gradient",
    CODE_GENERATOR = "code-generator",
    DESIGN_INSPIRATION = "design-inspiration",
    ICONS = "icons",
    IMAGES = "images",
    UI_LIBRARY = "ui-library",
    SVG = "svg",
    ILLUSTRATION = "illustration",
    HACKS ="hacks"
    
}
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

    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    avatarUrl: {
        type: String,
        // required: true,
        trim: true,
    },
    category: [],
    meta: {
        like: [],
        comment: [{ username: String, comment: String }],
        clap: []
    },

});


export const Resource = mongoose.model("resource", ResourceSchema)