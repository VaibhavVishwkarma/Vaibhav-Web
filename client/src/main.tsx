import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";
import { useState, useEffect } from "react";
import App from "./App";
import NotFound from "./pages/not-found";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";

// GitHub Pages Redirect Handler Component
function GithubPagesRedirect() {
  useEffect(() => {
    // Handle GitHub Pages redirect from 404.html
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("p");
    
    if (redirectPath) {
      // Clean up the URL and redirect properly
      window.history.replaceState(
        null,
        document.title,
        redirectPath + (params.get("q") ? "?" + params.get("q") : "")
      );
    }
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <GithubPagesRedirect />
    <App />
  </ThemeProvider>
);
