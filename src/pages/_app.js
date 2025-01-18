// src/pages/_app.js
import { appWithTranslation } from 'next-i18next';
import i18n from '../i18n';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
