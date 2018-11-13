import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
// import { Provider } from 'mobx-react'
import registerServiceWorker from './registerServiceWorker'
//import 'semantic-ui-css-magalu/semantic.min.css'

// config
// import config from "./config";
// stores
//import NavStore from './components/Nav/store'

// import MainMenuStore from './components/MainMenu/store'
// import ExpeditionStore from './containers/Routines/Expedition/store'
// import ReceiptStore from './containers/Reports/Receipt/store'
// import TransportListStore from './containers/Routines/TransportList/store'
// import ReceiptBilledStore from './containers/Routines/ReceiptBilled/store'
// import ModalImportTransportListStore from './containers/Routines/ReceiptBilled/components/ModalImportTransportList/store'

// css
import "semantic-ui-css/semantic.min.css";
import './index.css'

const stores = {
    //  NavStore
    //   MainMenuStore,
    //   ExpeditionStore,
    //   ReceiptStore,
    //   TransportListStore,
    //   ReceiptBilledStore,
    //   ModalImportTransportListStore
}

// For easier debugging
window._____APP_STATE_____ = stores

render(
    // <Provider {...stores}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    // </Provider>,
    , document.getElementById('root')
)
registerServiceWorker()
