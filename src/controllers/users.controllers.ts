import { Request, Response } from "express";
import { handleError } from "../errors/appError";
import {
  createAnUser,
  deleteAnUser,
  getAnUser,
  getUsers,
  updateAnUser,
} from "../services/contacts/contacts.service";
import { IUserRequest } from "../interfaces";

export const createAnUserController = async (req: Request, res: Response) => {
  try {
    const { emails, nome, telefones }: IUserRequest = req.body;
    const userCreated = await createAnUser({ emails, nome, telefones });
    return res.status(201).json(userCreated);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const deleteAnUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteAnUser(id);
    return res.status(204).json("");
  } catch (error: any) {
    handleError(error, res);
  }
};

export const patchAnUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, telefones, emails } = req.body;
    const patchedUser = await updateAnUser(id, { nome, telefones, emails });
    return res.status(200).json(patchedUser);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const getAnUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getAnUser(id);
    return res.status(200).json(user);
  } catch (error: any) {
    handleError(error, res);
  }
};
