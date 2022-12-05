import { Router } from "express";
import { loginUserController } from "../controllers/client.controllers";

const routes = Router();

export const userLogin = () => {
  routes.post("/", loginUserController);
  return routes;
};
