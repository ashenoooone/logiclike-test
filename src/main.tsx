import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/main-page/main-page.tsx";
import "normalize.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
