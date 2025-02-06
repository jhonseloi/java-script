import React from 'react'

import Header from './components/Header/'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    )
}

export default App
