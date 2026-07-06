import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>

        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
                style: {
                    borderRadius: "16px",
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: "500",
                },
                success: {
                    iconTheme: {
                        primary: "#4f46e5",
                        secondary: "#ffffff",
                    },
                },
                error: {
                    iconTheme: {
                        primary: "#ef4444",
                        secondary: "#ffffff",
                    },
                },
            }}
        />

        <App />

    </StrictMode>
);