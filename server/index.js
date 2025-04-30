const express = require("express");
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const port = 3001;
app.use(cors({ origin: [""] }));
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.use((err, req, res) => {
  console.error("Error:", err);
  res
    .status(500)
    .json({ error: "Unexpected error occurred", details: err.message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
