// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './js/state/StoreProvider';
import { App } from './js/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const root = document.getElementById('root');

root &&
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
