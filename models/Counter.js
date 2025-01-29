const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    seq: Number,
});

const Counter = mongoose.model("Counter", counterSchema);
module.exports = Counter;
