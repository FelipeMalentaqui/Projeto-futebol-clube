import { Router } from 'express';
import leaderboard from '../controllers/leaderboard.controller';
// import validateJWT from '../auth/validateJWT';

const router = Router();

router.get('/home', leaderboard.getAll);

export default router;
