import express from 'express';
import {
  login,
  forceChangePassword,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/force-change', forceChangePassword);

export default router;