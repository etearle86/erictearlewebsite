import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppContextProvider } from "./context/AppContext";
import { featuredImages } from "./assets/data/featured-images";

const randomStartIndex = Math.floor(Math.random() * featuredImages.length);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppContextProvider initialIndex={randomStartIndex}>
            <App />
        </AppContextProvider>
    </React.StrictMode>
);

reportWebVitals();