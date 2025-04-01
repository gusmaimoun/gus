import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import TechStack from "./pages/TechStack.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="tech-stack" element={<TechStack />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
