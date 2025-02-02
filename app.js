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
const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Hello World");
});

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
        if (!req.file)
            return res
                .status(400)
                .json({ error: "Transaction screenshot is required" });

        const uploadResult = await uploadCloud(req.file.buffer);
        if (!uploadResult.success)
            return res.status(500).json({ error: "Image upload failed" });

        const participantIds = [];
        const emailTasks = [];

        for (const user of JSON.parse(participants)) {
            const pid = await getNextPid();
            const participant = await Participant.create({ pid, ...user });
            participantIds.push(participant.pid);

            // Collect emails to send later
            emailTasks.push({ email: participant.email, pid });
        }

        // Save registration data
        const registration = await Registration.create({
            numOfParticipants: participantIds.length,
            participants: participantIds,
            totalAmount: totalAmount,
            transactionId,
            transactionImage: uploadResult.link,
        });

        // Respond immediately
        res.status(201).json({
            message: "Registration successful",
            data: registration,
        });

        // Process emails asynchronously
        setImmediate(async () => {
            for (const task of emailTasks) {
                try {
                    await sendMail(task.email, task.pid);
                    console.log(`Mail sent to ${task.email}`);
                } catch (err) {
                    console.error(`Failed to send mail to ${task.email}:`, err);
                }
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error", details: error.message });
    }
});


const start = async () => {
    await dbConnect(MONGO_URI);
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

start();
