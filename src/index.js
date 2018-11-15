import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import registerServiceWorker from './registerServiceWorker'
import stores from "./_js/store/index";

import "semantic-ui-css/semantic.min.css";
import './index.css'



// For easier debugging
window._____APP_STATE_____ = stores

render(
    <Provider store={stores}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)
registerServiceWorker()
