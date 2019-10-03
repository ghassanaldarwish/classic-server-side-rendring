const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "test", "test.json"));
});

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
