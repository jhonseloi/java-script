import React from 'react'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import history from './services/history'
import Header from './components/Header/'
import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes'

function App() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
    )
}

export default App
