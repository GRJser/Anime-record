import React from 'react'
import AppRouter from './router/router.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';

function App () {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppRouter />
        </React.Fragment>
    );
}

export default App
