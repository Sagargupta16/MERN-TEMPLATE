import { Router } from 'express';

import * as authController from '../controllers/authController.js';
import limiter from '../utils/limiter.js';

const router = Router();

router.post('/signup', limiter, authController.postSignup);
router.post('/login', limiter, authController.getLogin);
router.post('/verify-email', limiter, authController.postVerifyEmail);
router.post('/verify-otp', limiter, authController.postVerifyOTP);
router.post('/reset-password', limiter, authController.postResetPassword);

export default router;
