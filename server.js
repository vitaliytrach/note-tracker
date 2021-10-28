const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Setting up middleware
app.use(express.static("public"));
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

const homeRoutes = require("./routes/homeRoute");
const noteRoutes = require("./routes/noteRoute");

app.use(homeRoutes);
app.use(noteRoutes);

app.listen(port, () => {
    console.log(`Listening at https://localhost:${port}`);
});