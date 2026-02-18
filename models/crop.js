const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    crop_id: Number,
    name: String
});

module.exports = mongoose.model("Crop", cropSchema);