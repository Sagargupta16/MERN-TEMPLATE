import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import limiter from '../utils/limiter.js';

const router = Router();

router.get('/view', authenticateUser, userController.viewAllUsers);
router.get('/view/:id', authenticateUser, userController.viewSingleUser);
router.put('/update/:id', authenticateUser, limiter, userController.updateUser);
router.delete('/delete/:id', authenticateUser, limiter, userController.deleteUser);

export default router;
