import express from "express";
import userRouter from "./User.route.js";
const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
