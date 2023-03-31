import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import loginController from '../controllers/login.controller';
import validateJWT from '../auth/validateJWT';

const router = Router();

router.post('/', validateLogin, loginController.login);
// router.get('/', validateJWT, loginController.getAll);
router.get('/role', validateJWT, loginController.getById);

export default router;
