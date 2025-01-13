import express from "express";
import { env } from "./config/environment.js";
import connect from "./config/config.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

connect();

app.use("/api", routes);

app.listen(env.port, () => {
  console.log(`Example app listening at http://localhost:${env.port}`);
});
