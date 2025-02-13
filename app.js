const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./db");
const multer = require("multer");
const Participant = require("./models/Participant");
const Registration = require("./models/Registration");
const Counter = require("./models/Counter");
const uploadCloud = require("./util/cloudinary");
const { sendMail } = require("./util/email");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

// Optimized getNextPid
const getNextPid = async () => {
    const counter = await Counter.findOneAndUpdate(
        { name: "participant_pid" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
    return counter.seq;
};

app.post("/register", upload.single("transactionImage"), async (req, res) => {
    try {
        const { participants, transactionId, totalAmount } = req.body;
        if (!req.file) return res.status(400).json({ error: "Transaction screenshot is required" });

        const uploadResult = await uploadCloud(req.file.buffer);
        if (!uploadResult.success) return res.status(500).json({ error: "Image upload failed" });

        const participantData = Array.isArray(participants) ? participants : JSON.parse(participants);
        const participantIds = [];
        const participantsNamesEmails = [];

        // Bulk insert participants
        for (const user of participantData) {
            const pid = await getNextPid();
            const participant = await Participant.create({ pid, ...user });
            participantIds.push(participant.pid);
            participantsNamesEmails.push({ name: participant.name, email: participant.email });
        }

        const registration = await Registration.create({
            numOfParticipants: participantIds.length,
            participants: participantIds,
            totalAmount,
            transactionId,
            transactionImage: uploadResult.link,
        });

        sendMail(participantsNamesEmails[0].email, participantsNamesEmails).catch(console.error);

        res.status(201).json({ message: "Registration successful", data: registration });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Server error", details: error.message });
    }
});

const start = async () => {
    await dbConnect(MONGO_URI);
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

start();
