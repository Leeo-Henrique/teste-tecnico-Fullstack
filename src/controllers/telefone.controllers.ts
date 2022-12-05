import { Request, Response } from "express";
import { handleError } from "../errors/appError";
import {
  createAnTelefone,
  deleteAnTelefone,
  getAnTelefone,
  getTelefones,
  updateAnTelefone,
} from "../services/telefone/telefone.service";

export const createAntelefoneController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { telefone } = req.body;
    const telefoneCreated = await createAnTelefone(id, telefone);
    return res.status(201).json(telefoneCreated);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const deleteAnTelefoneController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    await deleteAnTelefone(id);
    return res.status(204).json("");
  } catch (error: any) {
    handleError(error, res);
  }
};

export const patchAnTelefoneController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { telefone } = req.body;
    const patchedtelefone = await updateAnTelefone(id, telefone);
    return res.status(200).json(patchedtelefone);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const getTelefonesController = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const telefones = await getTelefones(userID);
    return res.status(200).json(telefones);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const getAnTelefoneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const telefone = await getAnTelefone(id);
    return res.status(200).json(telefone);
  } catch (error: any) {
    handleError(error, res);
  }
};
