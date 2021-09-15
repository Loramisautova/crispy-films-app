import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { App } from './app';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';
import { mockWorker } from './app/mocks';
import { theme } from './app/styles/theme';

import 'normalize.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

/**
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();

/**
 * Mock Service Worker for development mode.
 * Learn more: https://mswjs.io/
 */
if (process.env.NODE_ENV === 'development') {
    mockWorker
        .start()
        // eslint-disable-next-line no-console
        .catch((err) => console.log('Error when mock worker start.', err));
}
