import { AppBar, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const TopnavBar = styled(AppBar).attrs({
    elevation: 0,
    color: 'secondary',
})`
    background: white;
    color: ${props => props.theme.palette.primary.main};
`;

export const TopnavToolbar = styled(Toolbar)``;

export const LogoWrapper = styled.div`
    height: 24px;
    display: flex;
    align-items: center;

    svg {
        height: 100%;
        margin-right: 12px;
    }
`;

export const Divider = styled.div`
    margin: 0 12px;

    &::before {
        content: '•';
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
`;

export const Spacer = styled.div`
    flex-grow: 1;
`;
