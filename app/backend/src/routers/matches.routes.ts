import { Router } from 'express';
import matchesController from '../controllers/matches.controller';
import validateJWT from '../auth/validateJWT';

const router = Router();

router.get('/', matchesController.getAll);
// router.get('/inProgress', matchesController.gameInProgress);
router.patch('/:id/finish', validateJWT, matchesController.finish);

router.patch('/:id', validateJWT, matchesController.updatedGame);

router.post('/', validateJWT, matchesController.createGame);
export default router;
