import { IconButton, Typography } from '@material-ui/core';
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
};

const IconCard = ({ icon: SVGcode, name, color }: Props) => {
    return (
        <Card>
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
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <CodeIcon onClick={() => copy(SVGcode)} />
                </IconButton>
                <IconButton>
                    <DownloadIcon />
                </IconButton>
            </Actions>
        </Card>
    );
};

export default IconCard;
