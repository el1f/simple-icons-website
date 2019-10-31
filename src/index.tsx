import { CssBaseline, MuiThemeProvider, withWidth } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './config/serviceWorker';
import getTheme from './config/theme';
import Routes from './routes';

const App = ({ width }: { width: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }) => (
    <StylesProvider injectFirst>
        <MuiThemeProvider theme={getTheme(width)}>
            <ThemeProvider theme={getTheme(width)}>
                <>
                    <CssBaseline />
                    <Routes />
                </>
            </ThemeProvider>
        </MuiThemeProvider>
    </StylesProvider>
);

const EnhancedApp = withWidth()(App);

const root = document.getElementById('root');

if (root !== null) ReactDOM.render(<EnhancedApp />, root);

serviceWorker.unregister();
