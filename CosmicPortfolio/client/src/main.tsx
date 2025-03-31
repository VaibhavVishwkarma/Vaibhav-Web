import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";
import { useState, useEffect } from "react";
import App from "./App";
import NotFound from "./pages/not-found";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
