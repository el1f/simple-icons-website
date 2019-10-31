import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ReactComponent as Logo } from 'assets/icons/simpleicons.svg';
import React from 'react';

const Topnav = () => {
    return (
        <AppBar>
            <Toolbar>
                <div>
                    <Logo />
                    <Typography variant="h2">Simple Icons</Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Topnav;
