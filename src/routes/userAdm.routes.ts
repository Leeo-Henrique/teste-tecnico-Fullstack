import { Router } from "express";
import {
  createAnClientController,
  getClientsController,
} from "../controllers/client.controllers";

const routes = Router();

export const UserRegister = () => {
  routes.post("/", createAnClientController);
  routes.get("/", getClientsController);
  return routes;
};
