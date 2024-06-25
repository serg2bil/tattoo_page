
import React, { useState, useEffect } from 'react';
import { ListItem, ListItemText } from '@mui/material';
import style from '@/components/LanguageSelect/styleSelectMobile.module.css';
import { useTranslation } from 'react-i18next'; // Импорт useTranslation

const LanguageSelectorMobile = () => {
  const { t, i18n } = useTranslation(); // Использование useTranslation для доступа к функции t и текущему языку i18n


  const [selectedLanguage, setSelectedLanguage] = useState({
    name: getlang(i18n.language),
    key: i18n.language,
    isSelect: true,
  });
  useEffect(() => {
    setSelectedLanguage({
      name: getlang(i18n.language),
      key: i18n.language,
      isSelect: true,
    });
  }, []); 

function getlang(lang){
  const exemp = {
    pl:'PL',
    en:'EN',
    ru:'RUS'
  }
  return(exemp[lang])
}

  const languages = [
    { name: 'PL', key: 'pl', isSelect: false },
    { name: 'EN', key: 'en', isSelect: false },
    { name: 'RUS', key: 'ru', isSelect: false },
  ];



  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language.key); // Изменение языка с помощью i18n.changeLanguage
    setSelectedLanguage(language);
    
  };

  return (
    <ul className={style.list}>
      {
        languages.map((language) => (
          <ListItem
            
            key={language.key}
            button
            onClick={() => handleLanguageSelect(language)}
          >
            <ListItemText className={`${selectedLanguage.key === language.key ? style.color : ''} `} primary={language.name} />
          </ListItem>
        ))
      }
    </ul>
  );
};

export default LanguageSelectorMobile;
