import userModel from '../database/models/Users';
import createToken from '../utils/criandoToken';

const login = async (email: string, password: string) => {
  const loginUsers = await userModel.findOne({
    where: { email },
  });
  // console.log(email, password, 'aquii');

  console.log(loginUsers?.dataValues, 'loginUsers');

  if (!loginUsers || loginUsers.password !== password) {
    return { type: 'INVALID', messae: 'Invalid email or password' };
  }

  const token = createToken({ ...loginUsers });

  return { type: '', message: token };
};

const userLogin = { login };

export default userLogin;
