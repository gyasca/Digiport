const express = require('express');
const router = express.Router();

let userList = [];

router.post("/register", (req, res) => {
    let data = req.body;
    userList.push(data);
    res.json(data);
});

router.get("/profile", (req, res) => {
    res.json(userList);
});

module.exports = router;