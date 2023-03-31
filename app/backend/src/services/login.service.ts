import * as bcrypt from 'bcryptjs';
import userModel from '../database/models/Users';
import createToken from '../utils/criandoToken';

const login = async (email: string, password: string) => {
  const loginUsers = await userModel.findOne({
    where: { email },
  });

  // console.log(loginUsers, 'loginUsers');

  if (!loginUsers || !bcrypt.compareSync(password, loginUsers.password)) {
    return { type: 'INVALID', message: 'Invalid email or password' };
  }

  const token = createToken({ email, id: loginUsers.id });

  return { type: '', message: { token } };
};

const getById = async (id: number) => {
  const users = await userModel.findOne({
    where: { id },
  });

  if (!users) return { type: 'ERRO_USER', message: 'Erro user' };

  return { type: null, message: users };
};

// const getAll = async () => {
//   const users = await userModel.findAll();

//   return users;
// };

const userLogin = { login, getById };

export default userLogin;
