import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces";
import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Client } from "../../entities/clientsEntities";

export const createAnClient = async ({ email, password }: IUserLogin) => {
  const userDb = AppDataSource.getRepository(Client);
  const users = await userDb.find();
  const account = users.find((user) => user.email === email);

  if (account) {
    throw new AppError(400, "Email registrado");
  }
  const hashedPwd = await bcrypt.hash(password, 10);
  const newSupaUser = userDb.create({ email: email, password: hashedPwd });
  return await userDb.save(newSupaUser);
};

export const clientLoginService = async ({ email, password }: IUserLogin) => {
  const userDb = AppDataSource.getRepository(Client);

  const users = await userDb.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new AppError(404, "Email ou senha errado");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError(401, "Email ou senha errado");
  }

  const token = jwt.sign({ email: email }, String(process.env.SECRET_KEY), {
    expiresIn: "1d",
  });

  return { token, userID: account.id };
};

export const getClients = async () => {
  const userDb = AppDataSource.getRepository(Client);
  return await userDb.find();
};

export const getAnClient = async (id: string) => {
  const userDb = AppDataSource.getRepository(Client);
  return await userDb.findOneBy({ id: id });
};
