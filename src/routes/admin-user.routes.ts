import { Router } from 'express';
import { getAllUsers, getSingleUser, deleteUser } from '../controllers/admin-user.controller';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.delete('/users/:id', deleteUser);

export default router;
