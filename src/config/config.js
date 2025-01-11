import mongoose from "mongoose";
import { env } from "./environment.js";
const connect = async () => {
  mongoose.connection
    .on("error", console.log)
    .on("disconnected", console.log)
    .once("open", () => {
      console.log("connect to mongodb is OKay");
    });
  return await mongoose.connect(env.dbUrl);
};

export default connect;
