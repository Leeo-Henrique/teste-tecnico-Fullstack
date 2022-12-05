import { Contact } from "../../entities/contactsEntities";
import { AppDataSource } from "../../data-source";
import { IUserLogin, IUserPatched, IUserRequest } from "../../interfaces";
import { AppError } from "../../errors/appError";
import { Email } from "../../entities/emailsEntities";
import { Telefone } from "../../entities/telefonesEntities";

export const createAnUser = async ({
  emails,
  nome,
  telefones,
}: IUserRequest) => {
  const userDb = AppDataSource.getRepository(Contact);
  const emailDb = AppDataSource.getRepository(Email);
  const telefoneDb = AppDataSource.getRepository(Telefone);

  const createdUser = userDb.create({
    nome: nome,
  });
  await userDb.save(createdUser);
  emails.forEach(async (email) => {
    const newEmail = emailDb.create({
      email: email,
      contact: createdUser,
    });
    emailDb.save(newEmail);
  });

  telefones.forEach(async (telefone) => {
    const newFone = telefoneDb.create({
      telefone: telefone,
      contact: createdUser,
    });
    telefoneDb.save(newFone);
  });

  return createdUser;
};

export const updateAnUser = async (id: string, data: IUserPatched) => {
  console.log(data);
  const userDb = AppDataSource.getRepository(Contact);
  const emailDb = AppDataSource.getRepository(Email);
  const telefoneDb = AppDataSource.getRepository(Telefone);
  const findedUser = await userDb.findOneBy({ id: id });

  if (!findedUser) {
    const statusNotFound = 404;
    const message = "Usuario não encontrado";
    throw new AppError(statusNotFound, message);
  }

  data.emails?.forEach(async (email) => {
    const fakeUUID = "f58cb88c-7054-43e7-935e-f90a89fcc202";
    email.id === "" ? (email.id = fakeUUID) : email.id;

    const findedEmail = await emailDb.findOneBy({ id: email.id });
    if (findedEmail) {
      await emailDb.save({
        id: findedEmail.id,
        email: email.email,
      });
    } else {
      const newEmail = emailDb.create({
        contact: findedUser,
        email: email.email,
      });
      emailDb.save(newEmail);
    }
  });

  data.telefones?.forEach(async (telefone) => {
    const fakeUUID = "f58cb88c-7054-43e7-935e-f90a89fcc202";

    telefone.id === "" ? (telefone.id = fakeUUID) : telefone.id;

    const findedTelefone = await telefoneDb.findOneBy({ id: telefone.id });
    if (findedTelefone) {
      await telefoneDb.save({
        id: findedTelefone.id,
        telefone: telefone.telefone || findedTelefone.telefone,
      });
    } else {
      const newEmail = telefoneDb.create({
        contact: findedUser,
        telefone: telefone.telefone,
      });
      telefoneDb.save(newEmail);
    }
  });

  await userDb.save({
    id: findedUser.id,
    created: findedUser.created,
    name: data.nome || findedUser.nome,
  });

  const updatedUser = () => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const findedUser = await userDb.findOneBy({ id: id });

        resolve(findedUser);
      }, 500);
    });
  };
  return updatedUser();
};

export const deleteAnUser = async (id: string) => {
  const userDb = AppDataSource.getRepository(Contact);
  const findedUser = await userDb.findOneBy({ id: id });

  if (!findedUser) {
    const statusNotFound = 404;
    const message = "Usuario não encontrado";
    throw new AppError(statusNotFound, message);
  }

  const queryDelete = userDb.query(
    "DELETE FROM contacts WHERE contacts.id = $1",
    [id]
  );

  return queryDelete;
};

export const getUsers = async () => {
  const userDb = AppDataSource.getRepository(Contact);
  const users = userDb.find({
    relations: { emails: true, telefones: true },
  });

  return users;
};

export const getAnUser = async (id: string) => {
  const userDb = AppDataSource.getRepository(Contact);
  const findedUser = await userDb.findOneBy({ id: id });

  if (!findedUser) {
    const statusNotFound = 404;
    const message = "Usuario não encontrado";
    throw new AppError(statusNotFound, message);
  }

  return findedUser;
};
