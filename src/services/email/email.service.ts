import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Email } from "../../entities/emailsEntities";
import { Contact } from "../../entities/contactsEntities";

export const createAnEmail = async (id: string, email: string) => {
  const emailDb = AppDataSource.getRepository(Email);
  const userDb = AppDataSource.getRepository(Contact);
  const findedUser = await userDb.findOneBy({ id: id });

  if (!findedUser) {
    const statusNotFound = 404;
    const message = "Usuario não encontrado";
    throw new AppError(statusNotFound, message);
  }
  const createdEmail = emailDb.create({
    email: email,
    contact: findedUser,
  });
  return emailDb.save(createdEmail);
};

export const updateAnEmail = async (id: string, email: string) => {
  const emailDb = AppDataSource.getRepository(Email);
  const findedEmail = await emailDb.findOneBy({ id: id });

  if (!findedEmail) {
    const statusNotFound = 404;
    const message = "Email não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return emailDb.save({
    email: email,
  });
};

export const deleteAnEmail = async (id: string) => {
  const emailDb = AppDataSource.getRepository(Email);
  const findedEmail = await emailDb.findOneBy({ id: id });

  if (!findedEmail) {
    const statusNotFound = 404;
    const message = "Email não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return await emailDb.delete(findedEmail);
};

export const getAnEmail = async (id: string) => {
  const emailDb = AppDataSource.getRepository(Email);
  const findedEmail = await emailDb.findOneBy({ id: id });

  if (!findedEmail) {
    const statusNotFound = 404;
    const message = "Email não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return findedEmail;
};

export const getEmails = async (id: string) => {
  const userDb = AppDataSource.getRepository(Contact);
  const findedUser = await userDb.findOneBy({ id: id });

  if (!findedUser) {
    const statusNotFound = 404;
    const message = "Usuario não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return findedUser.emails;
};
