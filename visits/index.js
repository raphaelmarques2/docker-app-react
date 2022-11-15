const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();

console.log(`REDIS_URL: ${process.env.REDIS_URL}`);
const client = redis.createClient({
  url: process.env.REDIS_URL,
});

async function start() {
  await client.connect();
  await client.set("visits", 0);
}
start();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", async (req, res) => {
  const visitsValue = await client.get("visits");
  const visits = visitsValue ? parseInt(visitsValue) : 0;
  await client.set("visits", visits + 1);
  res.send(`We got ${visits} visits!`);
});

app.get("/stop", (req, res) => {
  process.exit(0); //ok
});

app.get("/error", (req, res) => {
  process.exit(1); //error
});

app.listen(8081, () => {
  console.log("Runnint at http://localhost:8081");
});
