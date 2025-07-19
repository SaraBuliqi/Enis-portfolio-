import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Debug: Add console log to ensure app is loading
console.log("🚀 Enis Portfolio App is starting...");

createRoot(document.getElementById("root")!).render(<App />);
