import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import authorizeRole from "../middleware/authorizeRole.js";
import logger from "../config/logger.js";
import {
  getStudentProfile,
  updateStudentProfile,
} from "../controllers/studentController.js";

const router = express.Router();

const checkUserId = (req, res, next) => {
  if (!req.user || !req.user.userId) {
    logger.error(
      `User not authenticated in checkUserId for request: ${req.method} ${req.url}`
    );
    return res.status(401).json({ message: "User not authenticated" });
  }
  if (parseInt(req.params.id) !== req.user.userId) {
    logger.warn(
      `User ${req.user.userId} attempted to access profile ${req.params.id}`
    );
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

router.get(
  "/profile/:id",
  verifyToken,
  authorizeRole("student"),
  checkUserId,
  getStudentProfile
);
router.put(
  "/profile/:id",
  verifyToken,
  authorizeRole("student"),
  checkUserId,
  updateStudentProfile
);

export default router;
