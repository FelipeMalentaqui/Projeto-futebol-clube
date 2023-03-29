import { Router } from 'express';
import teamsController from '../controllers/teams.controllerr';

const router = Router();

router.get('/', teamsController.getAll);

export default router;
