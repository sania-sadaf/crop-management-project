const mongoose = require("mongoose");

const usesSchema = new mongoose.Schema({
    crop_id: Number,
    use: String
});

module.exports = mongoose.model("Uses", usesSchema);