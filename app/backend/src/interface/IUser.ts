interface IUser {
  email: string;
  password: string;
}

export interface Token {
  email: string;
  id: number;
}

export default IUser;
