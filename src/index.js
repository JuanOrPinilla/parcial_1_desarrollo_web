import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import { useEffect } from 'react';

const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages,
};
const Index = () => {
  const [language, setLanguage] = React.useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language.split(/[-_]/)[0];
    setLanguage(browserLanguage === "es" || browserLanguage ==="en" ? browserLanguage : "en");
    }, []);

return (
  <IntlProvider locale={language} messages= {messages[language]}>
    <App/>
    </IntlProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // Nueva API en React 18
root.render(<Index />);