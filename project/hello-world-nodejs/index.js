import express from "express";
import process from "process";

const app = express();

app.get("/", function (req, res) {
  res.send('{"message":"Hello World JavaScript v1"}');
});

app.listen(5000, function () {
  console.log("Ready on port 5000!");
});

process.on("SIGINT", function () {
  process.exit();
});
