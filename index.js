const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build/static")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
