import { Router } from 'express';
import matchesController from '../controllers/matches.controller';

const router = Router();

router.get('/', matchesController.getAll);

export default router;
