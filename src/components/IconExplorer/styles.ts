import styled from 'styled-components';

export const Toolbar = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ExplorerPane = styled.aside`
    flex-basis: 320px;
    flex-shrink: 0;
    margin-left: 32px;
`;

export const IconViewer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    height: 256px;
    border-radius: 24px;
`;

export const Icon = styled.div`
    svg {
        height: 128px;
        width: 128px;
    }
`;
