const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb+srv://Raveesha:raveesha@cluster0.cnc9ie5.mongodb.net/web-project2";
mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });

// Routes
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Storage Engine


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
