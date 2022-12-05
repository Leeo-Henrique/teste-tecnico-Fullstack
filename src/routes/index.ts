import {
  createAnUserController,
  deleteAnUserController,
  getAnUserController,
  getUsersController,
  patchAnUserController,
} from "../controllers/users.controllers";





import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", createAnUserController);
  routes.get("/", authUser, getUsersController);
  routes.get("/:id", getAnUserController);
  routes.patch("/:id", patchAnUserController);
  routes.delete("/:id", deleteAnUserController);
  return routes;
};



