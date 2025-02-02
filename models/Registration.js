const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
    {
        numOfParticipants: {
            type: Number,
            required: true,
        },
        participants: {
            type: [
                {
                    type: Number,
                    ref: "Participant",
                },
            ],
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        transactionId: {
            type: String,
            required: true,
        },
        transactionImage: {
            type: String,
            required: true,
        },
        mailSent: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Registration = mongoose.model("Registration", registrationSchema);
module.exports = Registration;
