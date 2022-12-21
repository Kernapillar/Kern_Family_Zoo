import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PictureSchema = Schema({
    title: {
        type: String,
        required: true,

    }, 
    name: {
        type: String,
        required: true,
    }, 
    scientificName: {
        type: String,
        required: true,
    }, 
    tags: [String],

});

export const Picture = mongoose.model("Picture", PictureSchema);
