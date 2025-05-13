// api/index.js
const express = require("express");
const app = express();
const serverless = require("serverless-http");

app.get("/", (req, res) => {
  res.send("<h1>Hello from Express deployed on Vercel!</h1>");
});

// Add more routes here if needed

module.exports = app;
module.exports.handler = serverless(app);
