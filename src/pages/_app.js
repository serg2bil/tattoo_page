import { appWithTranslation, useTranslation } from 'next-i18next';
import i18n from '../i18n';
import '../styles/globals.css';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  // Проверяем, инициализирован ли i18n и переводы
  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoaded(true);
    } else {
      i18n.on('initialized', () => setIsLoaded(true));
    }
  }, [i18n]);

  // Пока переводы не загружены, показываем индикатор загрузки
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
