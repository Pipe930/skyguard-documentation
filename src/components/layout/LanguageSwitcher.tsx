import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage === "es" ? "es" : "en";

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value;
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  return (
    <div className="language-select-wrapper">
      <Languages size={16} className="language-icon" aria-hidden="true" />
      <select
        className="language-select"
        value={currentLanguage}
        onChange={handleLanguageChange}
        aria-label={t("navbar.common.switchLanguage")}
      >
        <option value="en">{t("navbar.common.english")}</option>
        <option value="es">{t("navbar.common.spanish")}</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
