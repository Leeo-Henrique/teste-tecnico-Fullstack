import { Router } from "express";
import {
  createAnEmailController,
  deleteAnEmailController,
  getAnEmailController,
  getEmailsController,
  patchAnEmailController,
} from "../controllers/email.controllers";

const routes = Router();
export const emailRoutes = () => {
  routes.post("/", createAnEmailController);
  routes.get("/:userID", getEmailsController);
  routes.get("/:id", getAnEmailController);
  routes.patch("/:id", patchAnEmailController);
  routes.delete("/:id", deleteAnEmailController);
  return routes;
};
