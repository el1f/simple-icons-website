import { IconButton, Tooltip, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddRounded';
import DownloadIcon from '@material-ui/icons/CloudDownloadOutlined';
import CodeIcon from '@material-ui/icons/CodeRounded';
import copy from 'clipboard-copy';
import React from 'react';
import SVG from 'react-inlinesvg';

import { Actions, Card, Color, ColorSpot, Icon, Name } from './styles';

type Props = {
    icon: any;
    name: string;
    color: string;
    onClick: () => void;
};

const IconCard = ({ icon: SVGcode, name, color, onClick }: Props) => {
    return (
        <Card color={color} onClick={onClick}>
            <Icon>
                <SVG src={SVGcode} />
            </Icon>
            <Name>{name}</Name>
            <Color onClick={() => copy(color)}>
                <ColorSpot color={color} />
                <Typography>
                    {`#${color}`}
                    <span>copy</span>
                </Typography>
            </Color>
            <Actions>
                {/* <IconButton>
                    <AddIcon />
                </IconButton> */}
                <Tooltip title="Copy SVG code">
                    <IconButton>
                        <CodeIcon onClick={() => copy(SVGcode)} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Download SVG icon">
                    <IconButton
                        component="a"
                        download={name}
                        href={`data:image/svg+xml; charset=utf8, ' ${encodeURIComponent(
                            SVGcode.replace(/></g, '>\n\r<'),
                        )}`}
                    >
                        <DownloadIcon />
                    </IconButton>
                </Tooltip>
            </Actions>
        </Card>
    );
};

export default IconCard;
