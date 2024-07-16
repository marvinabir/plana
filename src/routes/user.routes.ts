import { Router } from 'express';
import { register, login, reset } from '../controllers/user.controller';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset', reset);

export default router;
