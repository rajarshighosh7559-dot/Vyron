import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

if (typeof document !== "undefined") {
  // Ensure Tailwind CSS is loaded in the preview environment
  if (!document.getElementById("vyron-tailwind-cdn")) {
    const tw = document.createElement("script");
    tw.id = "vyron-tailwind-cdn";
    tw.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(tw);
  }

  // Ensure Google Fonts (DM Sans & Playfair Display) are loaded
  if (!document.getElementById("vyron-google-fonts")) {
    const gf = document.createElement("link");
    gf.id = "vyron-google-fonts";
    gf.rel = "stylesheet";
    gf.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap";
    document.head.appendChild(gf);
  }

  // Inject base VYRON theme styles directly so no external CSS import can fail
  if (!document.getElementById("vyron-base-styles")) {
    const style = document.createElement("style");
    style.id = "vyron-base-styles";
    style.textContent = `
      :root {
        color-scheme: light;
        background-color: #f3f2ec;
        color: #242b26;
      }
      html, body, #root {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: #f3f2ec;
        color: #242b26;
        font-family: "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif;
      }
      .font-serif-display {
        font-family: "Playfair Display", Georgia, serif;
      }
    `;
    document.head.appendChild(style);
  }
}

function mountVyronApp() {
  let rootEl = document.getElementById("root");
  if (!rootEl && document.body) {
    rootEl = document.createElement("div");
    rootEl.id = "root";
    document.body.appendChild(rootEl);
  }
  if (rootEl) {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountVyronApp);
} else {
  mountVyronApp();
}