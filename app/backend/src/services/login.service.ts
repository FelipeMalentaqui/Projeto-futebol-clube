import * as bcrypt from 'bcryptjs';
import userModel from '../database/models/Users';
import createToken from '../utils/criandoToken';

const login = async (email: string, password: string) => {
  const loginUsers = await userModel.findOne({
    where: { email },
  });

  console.log(loginUsers, 'loginUsers');

  if (!loginUsers || !bcrypt.compareSync(password, loginUsers.password)) {
    return { type: 'INVALID', message: 'Invalid email or password' };
  }

  const token = createToken({ email, password });

  return { type: '', message: { token } };
};

const userLogin = { login };

export default userLogin;
