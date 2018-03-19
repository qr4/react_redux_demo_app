// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './js/state/StoreProvider';
import { App } from './js/App';

import './styles/css/bootstrap.min.css';
import './styles/css/bootstrap-grid.min.css';
import './styles/css/fontawesome-all.min.css';

const root = document.getElementById('root');

root &&
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
