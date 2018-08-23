import React from 'react';
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider} from 'react-intl';

import Hello from './Hello.js';

import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import es from 'react-intl/locale-data/es';

addLocaleData([...ja, ...en, ...es]);

const messages = {
  'en-US': {
    "salute": 'Hello!',
  },
  'ja-JP': {
    'salute': 'こんにちは!'
  },
  'es-MX': {
    'salute': '¡Hola!'
  }
};

// const localeCode = 'en-US';
// const localeCode = 'ja-JP';
const localeCode = 'es-MX';

ReactDOM.render(
  <IntlProvider
    locale={localeCode}
    messages={messages[localeCode]}
  >
    <div>
      <Hello/>
    </div>
  </IntlProvider>,
  document.getElementById('app')
);
