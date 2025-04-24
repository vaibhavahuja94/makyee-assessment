import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="bg-transparent hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"
    >
      {i18n.language === "en" ? "عربي" : "English"}
    </Button>
  );
};
