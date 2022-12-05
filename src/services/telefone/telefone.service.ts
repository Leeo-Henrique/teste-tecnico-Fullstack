import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Telefone } from "../../entities/telefonesEntities";
import { Contact } from "../../entities/contactsEntities";

export const createAnTelefone = async (id: string, telefone: string) => {
  const telefoneDb = AppDataSource.getRepository(Telefone);
  const userDb = AppDataSource.getRepository(Contact);
  const findedUser = await userDb.findOneBy({ id: id });

  if (!findedUser) {
    const statusNotFound = 404;
    const message = "Usuario não encontrado";
    throw new AppError(statusNotFound, message);
  }
  const createdTelefone = telefoneDb.create({
    telefone: telefone,
    contact: findedUser,
  });
  return telefoneDb.save(createdTelefone);
};

export const updateAnTelefone = async (id: string, telefone: string) => {
  const telefoneDb = AppDataSource.getRepository(Telefone);
  const findedTelefone = await telefoneDb.findOneBy({ id: id });

  if (!findedTelefone) {
    const statusNotFound = 404;
    const message = "Telefone não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return telefoneDb.save({
    telefone: telefone,
  });
};

export const deleteAnTelefone = async (id: string) => {
  const telefoneDb = AppDataSource.getRepository(Telefone);
  const findedTelefone = await telefoneDb.findOneBy({ id: id });

  if (!findedTelefone) {
    const statusNotFound = 404;
    const message = "Telefone não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return await telefoneDb.delete(findedTelefone);
};

export const getAnTelefone = async (id: string) => {
  const telefoneDb = AppDataSource.getRepository(Telefone);
  const findedTelefone = await telefoneDb.findOneBy({ id: id });

  if (!findedTelefone) {
    const statusNotFound = 404;
    const message = "Telefone não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return findedTelefone;
};

export const getTelefones = async (id: string) => {
  const userDb = AppDataSource.getRepository(Contact);
  const findedUser = await userDb.findOneBy({ id: id });

  if (!findedUser) {
    const statusNotFound = 404;
    const message = "Usuario não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return findedUser.telefones;
};
