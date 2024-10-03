import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App.jsx";
import "./index.css"; 
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./store/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
  ,document.getElementById("root")
);
