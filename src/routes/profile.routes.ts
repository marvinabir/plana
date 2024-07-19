import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profile.controller';
import roleMiddleware from '../middlewares/role.middleware';
import authMiddleware from '../middlewares/auth.middleware';
import { Role } from '../interfaces/role.enum';

const router = Router();

router.get('/:id',authMiddleware, roleMiddleware(Role.ATTENDEE),  getProfile);
router.put('/:id',authMiddleware, roleMiddleware(Role.ATTENDEE), updateProfile);

export default router;
