import React from 'react'

import history from './services/history'
import Header from './components/Header/'
import GlobalStyle from './styles/GlobalStyle'
import { Router } from 'react-router-dom'
import Routes from './routes'

function App() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
        </Router>
    )
}

export default App
