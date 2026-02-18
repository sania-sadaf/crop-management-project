const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
    crop_id: Number,
    price: Number
});

module.exports = mongoose.model("Price", priceSchema);