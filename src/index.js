import React from 'react';
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider} from 'react-intl';

import Hello from './Hello.js';

// Import default locale data for number and formats
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import es from 'react-intl/locale-data/es';
addLocaleData([...ja, ...en, ...es]);

// Locale data, probably better to keep in a separate file
const messages = {
    'en-US': {
        'salute': 'Hello {name}!',
        'now': 'Today\'s date is:',
        'cats': 'I have {count} cats'
    },
    'ja-JP': {
        'salute': '{name}さん こんにちは!',
        'now': '今日は:',
        'cats': '私は{count}匹の猫がいる'
    },
    'es-ES': {
        'salute': '¡Hola {name}!',
        'now': 'El dia de hoy es:',
        'cats': 'Tengo {count} gatos'
    }
};

// Bad way to set locale, you could probably use the browser locale, 
// or change it globally on a redux store
// const localeCode = 'en-US';
const localeCode = 'ja-JP';
// const localeCode = 'es-ES';

ReactDOM.render(
    <IntlProvider
      locale={localeCode}
      messages={messages[localeCode]}
    >
        <Hello/>
    </IntlProvider>,
    document.getElementById('app')
);
