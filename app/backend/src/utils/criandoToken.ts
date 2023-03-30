import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
// import jwt, { SignOptions } from 'jsonwebtoken';
import { Token } from '../interface/IUser';

const JWT_SECRET = process.env.JWT_SECRET || 'meu segredo';

const JWT_CONFIG: jwt.SignOptions = { algorithm: 'HS256', expiresIn: '10d' };

// const JWT_CONFIG: SignOptions = {
//   algorithm: 'HS256',
//   expiresIn: '10d',
// };

const generateToken = (payload: Token) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

export default generateToken;
