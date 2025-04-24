import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./screens/Main/Main";
import "./i18n/config";

// Set initial direction based on language
const initialLang = localStorage.getItem("i18nextLng") || "en";
document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";
document.documentElement.lang = initialLang;

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
