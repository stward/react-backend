import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import history from './auth/history'

ReactDOM.render((
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
