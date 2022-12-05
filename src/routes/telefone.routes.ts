import { Router } from "express";
import {
  createAntelefoneController,
  deleteAnTelefoneController,
  getAnTelefoneController,
  getTelefonesController,
  patchAnTelefoneController,
} from "../controllers/telefone.controllers";
const routes = Router();

export const telefoneRoutes = () => {
  routes.post("/", createAntelefoneController);
  routes.get("/:userID", getTelefonesController);
  routes.get("/:id", getAnTelefoneController);
  routes.patch("/:id", patchAnTelefoneController);
  routes.delete("/:id", deleteAnTelefoneController);
  return routes;
};
