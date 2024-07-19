import { Router } from 'express';
import { getAll, getById, create, update, remove, getByUserId, createGroup, getGroup } from '../controllers/booking.controller';
import roleMiddleware from '../middlewares/role.middleware';
import authMiddleware from '../middlewares/auth.middleware';
import { Role } from '../interfaces/role.enum';

const router = Router();

router.get('/',authMiddleware, roleMiddleware(Role.EVENT_MANAGER), getAll);
router.get('/:id', getById);
router.post('/',authMiddleware, roleMiddleware(Role.ATTENDEE), create);
router.put('/:id',authMiddleware, roleMiddleware(Role.ATTENDEE), update);
router.delete('/:id', remove);

router.get('/user/:userId',authMiddleware, roleMiddleware(Role.ATTENDEE), getByUserId);

router.post('/group', createGroup);


router.get('/group/:userId/:eventId', getGroup);


export default router;
