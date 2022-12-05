import { Request, Response } from "express";
import { handleError } from "../errors/appError";
import {
  createAnEmail,
  deleteAnEmail,
  getAnEmail,
  getEmails,
  updateAnEmail,
} from "../services/email/email.service";

export const createAnEmailController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const emailCreated = await createAnEmail(id, email);
    return res.status(201).json(emailCreated);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const deleteAnEmailController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteAnEmail(id);
    return res.status(204).json("");
  } catch (error: any) {
    handleError(error, res);
  }
};

export const patchAnEmailController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const patchedEmail = await updateAnEmail(id, email);
    return res.status(200).json(patchedEmail);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const getEmailsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Emails = await getEmails(id);
    return res.status(200).json(Emails);
  } catch (error: any) {
    handleError(error, res);
  }
};

export const getAnEmailController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Email = await getAnEmail(id);
    return res.status(200).json(Email);
  } catch (error: any) {
    handleError(error, res);
  }
};
