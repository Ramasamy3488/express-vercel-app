const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

// No app.listen()

module.exports = app;
