const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res) {
  res.send("HMMMMMMMM");
});

app.listen(process.env.port || 5000);

console.log("Running at Port 3000");
