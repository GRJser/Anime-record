import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import AppHeader from '../components/AppHeader'
import Home from '../components/Home'

function AppRouter () {
    return (
        <Container maxWidth="lg">
            <BrowserRouter>
                <AppHeader></AppHeader>
                <Route path="/" component={Home} />
            </BrowserRouter>
        </Container>
    );
}

export default AppRouter
