import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from '../components/Home/index.jsx'
function AppRouter () {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    );
}

export default AppRouter
