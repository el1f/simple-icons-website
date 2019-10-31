import { ButtonBase,Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Card = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px 12px 8px 12px;
    border-radius: 16px;
`;

export const Icon = styled.div`
    height: 40px;
    width: 40px;
    margin-bottom: 6px;
`;

export const Name = styled(Typography)`
    font-size: 0.8rem;
    line-height: 1rem;
    font-weight: 700;
    margin-top: auto;
    margin-bottom: auto;
`;

export const Color = styled(ButtonBase)`
    display: flex;
    margin-top: 8px;
    padding: 4px 6px 4px 4px;
    border-radius: 8px;
    background-color: ${props => props.theme.palette.grey[300]};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    p {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 16px;

        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 0;
            background-color: ${props => props.theme.palette.grey[300]};
            transition: background-color 0.2s ease-in-out, opacity 0.1s ease-in-out;
        }
    }

    & > p {
        position: relative;
    }

    &:hover {
        background-color: ${props => props.theme.palette.grey[400]};

        p {
            span {
                opacity: 1;
                background-color: ${props => props.theme.palette.grey[400]};
            }
        }
    }
`;

export const ColorSpot = styled.div.attrs(({ color }) => ({
    style: {
        backgroundColor: `#${color}`,
    },
}))`
    height: 16px;
    width: 16px;
    margin-right: 4px;
    border-radius: 6px;
`;

export const Actions = styled.div`
    margin-top: 8px;

    button {
        height: 32px;
        width: 32px;
        padding: 0;

        svg {
            height: 20px;
            width: 20px;
        }
    }
`;
