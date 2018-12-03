import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Routes from './_routes'
import configureStore from './_store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();