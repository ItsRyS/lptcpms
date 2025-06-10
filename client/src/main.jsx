import React from "react"; // Explicitly import React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyToastContainer from "./components/common/MyToastContainer.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyToastContainer />
  </StrictMode>
);
