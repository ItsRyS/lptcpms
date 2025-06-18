import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import logger from '../config/logger.js';
dotenv.config();

const verifyToken = (req, res, next) => {
  if (!process.env.JWT_SECRET) {
    logger.error('JWT_SECRET is not defined');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  if (!req.headers) {
    logger.error(`No headers provided for request: ${req.method} ${req.url}`);
    return res.status(400).json({ message: 'No headers provided' });
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    logger.warn(`Token missing for request: ${req.method} ${req.url}`);
    return res.status(401).json({ message: 'Token required' });
  }

  logger.info(`Verifying token for request: ${req.method} ${req.url}`);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        logger.warn(`Token expired for request: ${req.method} ${req.url}`);
        return res.status(401).json({ message: 'Token expired' });
      }
      logger.error(`Invalid token for request: ${req.method} ${req.url}: ${err.message}`);
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

export default verifyToken;