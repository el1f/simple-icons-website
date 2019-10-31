import { Box, Button, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import React from 'react';
import SVG from 'react-inlinesvg';

import { ExplorerPane, Icon, IconViewer, Toolbar } from './styles';

type Props = {
    name: string;
    icon: string;
    onClose: () => void;
};

const IconExplorer = ({ name, icon: SVGcode, onClose }: Props) => {
    return (
        <ExplorerPane>
            <Toolbar>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            <Typography variant="h2">{name}</Typography>
            <IconViewer>
                <Icon>
                    <SVG src={SVGcode} />
                </Icon>
            </IconViewer>
            <Box marginTop={4}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component="a"
                    download={name}
                    href={`data:image/svg+xml; charset=utf8, ' ${encodeURIComponent(
                        SVGcode.replace(/></g, '>\n\r<'),
                    )}`}
                    fullWidth
                >
                    Download icon
                </Button>
            </Box>
        </ExplorerPane>
    );
};

export default IconExplorer;
