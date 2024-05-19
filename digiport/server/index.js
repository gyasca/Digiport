// Import dependencies
const express = require('express');
const cors = require('cors');

// Activate dependencies
const app = express();
app.use(cors());
app.use(express.json());

// Simple Routes
app.get("/", (req, res) => {
    res.send("Backend(Server) is running correctly! - gyasca");
});

// Routes
const userRoute = require('./routes/user');
const adminUserRoute = require('./routes/admin/user');

app.use("/user", userRoute);
app.use("/admin/user", adminUserRoute);

// Establish Dotenv connection
require('dotenv').config();

// Server success feedback
let port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`⚡ Sever running on http://localhost:${port}`);
});