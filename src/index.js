import express from "express";
import { env } from "./config/environment.js";
import connect from "./config/config.js";
const app = express();

app.use(express.json());

connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(env.port, () => {
  console.log(`Example app listening at http://localhost:${env.port}`);
});
