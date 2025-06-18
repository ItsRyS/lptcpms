import logger from '../config/logger.js';

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      logger.error(`User not authenticated in authorizeRole for request: ${req.method} ${req.url}`);
      return res.status(401).json({ message: 'User not authenticated' });
    }
    if (req.user.role !== role) {
      logger.warn(`Access denied for user: ${req.user.username} with role: ${req.user.role} (required: ${role})`);
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

export default authorizeRole;