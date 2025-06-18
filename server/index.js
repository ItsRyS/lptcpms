import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import logger from "./config/logger.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan("combined", {
    stream: {
      write: (message) => {
        const isHealthcheck = message.includes("GET / ") || message.includes("GET /health");
        logger.log(isHealthcheck ? "debug" : "info", message.trim());
      },
    },
  })
);

// CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [
  "https://lptcpms.vercel.app",
  "http://localhost:5173",
];
if (!process.env.ALLOWED_ORIGINS) {
  logger.warn("ALLOWED_ORIGINS not set, defaulting to predefined origins");
}
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Rate Limiter
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Too many auth requests from this IP, please try again later.",
});
app.use(generalLimiter);
app.use("/api/auth", authLimiter);

// Routes
app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.get("/health", async (req, res) => {
  try {
    const start = Date.now();
    await db.query("SELECT 1");
    const latency = Date.now() - start;
    res.status(200).json({
      status: "OK",
      uptime: process.uptime(),
      database: "connected",
      dbLatency: `${latency}ms`,
    });
  } catch (err) {
    logger.error(`Health check failed: ${err.message}`);
    res.status(503).json({ status: "ERROR", database: "disconnected" });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Error Handler
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ error: "CORS not allowed" });
  }
  logger.error("Unexpected error:", {
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
  res.status(500).json({ error: "Internal server error" });
});

const server = app.listen(port, () => {
  logger.info(`App listening on port ${port}`);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM received. Closing server...");
  server.close(() => {
    logger.info("Server closed.");
    db.pool.end(() => {
      logger.info("Database connection pool closed.");
      process.exit(0);
    });
  });
});