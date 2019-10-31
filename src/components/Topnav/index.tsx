import { Button, Icon, IconButton, Typography } from '@material-ui/core';
import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as NPM } from 'assets/icons/npm.svg';
import { ReactComponent as Logo } from 'assets/icons/simpleicons.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Links, LogoWrapper, Spacer, TopnavBar, TopnavToolbar } from 'styles/Topnav';

const Topnav = () => {
    return (
        <TopnavBar>
            <TopnavToolbar>
                <LogoWrapper>
                    <Logo />
                    <Typography variant="h6">Simple Icons</Typography>
                </LogoWrapper>
                <Spacer />
                <Links>
                    <Button component={Link} to="/about">
                        About
                    </Button>
                </Links>
                <Links>
                    <Divider />
                    <IconButton>
                        <Icon>
                            <NPM />
                        </Icon>
                    </IconButton>
                    <IconButton>
                        <Icon>
                            <Github />
                        </Icon>
                    </IconButton>
                </Links>
            </TopnavToolbar>
        </TopnavBar>
    );
};

export default Topnav;
