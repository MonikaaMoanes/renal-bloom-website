import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: localStorage.getItem("renal-lang") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

// Save user choice
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("renal-lang", lng);
  document.documentElement.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
});

export default i18n;
