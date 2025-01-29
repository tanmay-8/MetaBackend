const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema(
    {
        pid: { type: Number, unique: true, required: true },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        collegeName: {
            type: String,
            required: true,
            trim: true,
        },
        yearOfStudy: {
            type: Number,
            required: true,
        },
        dualBoot: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;
