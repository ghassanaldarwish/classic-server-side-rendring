const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("build"));
router.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
app.use("*", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
