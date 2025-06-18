import express from 'express';
import { login, forceChangePassword } from '../controllers/authController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/login', login);
router.put('/force-change-password', verifyToken, forceChangePassword);

export default router;