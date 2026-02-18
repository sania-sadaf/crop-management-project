const express = require("express");
const mongoose = require("mongoose");
const Crop = require("./models/Crop");
const Uses = require("./models/Uses");
const Price = require("./models/Price");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/cropdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Basic Route
app.get("/", (req, res) => {
    res.send("Crop API Running");
});

// Insert Sample Data
app.get("/add", async (req, res) => {
    try {
        await Crop.insertMany([
            { crop_id: 1, name: "Rice" },
            { crop_id: 2, name: "Wheat" },
            { crop_id: 3, name: "Corn" }
        ]);

        await Uses.insertMany([
            { crop_id: 1, use: "Food consumption" },
            { crop_id: 2, use: "Flour production" },
            { crop_id: 3, use: "Animal feed" }
        ]);

        await Price.insertMany([
            { crop_id: 1, price: 50 },
            { crop_id: 2, price: 40 },
            { crop_id: 3, price: 30 }
        ]);

        res.send("Multiple Crops Added");
    } catch (error) {
        res.send(error);
    }
});
// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});