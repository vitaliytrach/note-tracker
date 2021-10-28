const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
let notes_db = require("../db/db.json");


router.get("/api/notes", (req, res) => {
    res.json(notes_db);
});

router.post("/api/notes", (req, res) => {
    if(req.body != null) {
        var note = req.body;
        note["id"] = uniqid();
        notes_db.push(note);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes_db, null, 8));
        res.json({message:"Success"});       
    }
});

router.delete("/api/notes/:id", (req, res) => {
    for(let i = 0; i < notes_db.length; i++) {
        if(notes_db[i].id === req.params.id) {
            notes_db.splice(i, 1);
            fs.writeFileSync("./db/db.json", JSON.stringify(notes_db, null, 8));
            res.json({message:"Success"});
            return;
        }
    }

    res.json({message:"Failure"});
});

module.exports = router;