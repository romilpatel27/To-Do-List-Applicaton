import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      {/* Add options for other languages if needed */}
    </select>
  );
};

export default LanguageSwitcher;