const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(8080, () => {
  console.log("Runnint at http://localhost:8080");
});
