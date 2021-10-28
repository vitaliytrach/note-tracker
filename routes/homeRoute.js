const express = require("express");
const router = express.Router();
const dir = __dirname;
const path = require("path");

// Route for homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(dir, "../public/index.html"));
});

// Route for notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(dir, "../public/notes.html"));
});

module.exports = router;