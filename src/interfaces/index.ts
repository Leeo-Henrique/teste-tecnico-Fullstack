export interface IUserRequest {
  nome: string;
  emails: string[];
  telefones: string[];
}
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserPatched {
  nome?: string;
  emails?: [{ id: string; email: string }];
  telefones?: [{ id: string; telefone: string }];
}
