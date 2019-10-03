const express = require("express");
const app = express();
const path = require("path");

//app.use(express.static("build"));
app.get("/", function(req, res) {
  // res.sendFile(path.resolve(__dirname, "index.html"));
  res.send("HMMMMMMMM");
});

app.listen(process.env.port || 5000);

console.log("Running at Port 3000");
