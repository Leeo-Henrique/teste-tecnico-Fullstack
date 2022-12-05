import { Request, Response } from "express";
import { handleError } from "../errors/appError";
import {
  createAnClient,
  getClients,
  clientLoginService,
  
} from "../services/client/client.service";

export const createAnClientController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const createdUser = await createAnClient({ email, password });
    return res.status(201).json(createdUser);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const getClientsController = async (req: Request, res: Response) => {
  try {
    const users = await getClients();
    return res.status(200).json(users);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const login = await clientLoginService({ email, password });
    return res.status(200).json(login);
  } catch (error: any) {
    handleError(error, res);
  }
};
