import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: grid;
    grid-column-gap: 32px;
    padding: 32px 24px 24px 24px;

    @media (min-width: 960px) {
        grid-template-columns: 256px 1fr;
    }
`;

export const IconBrowser = styled.div`
    display: flex;
`;

export const Sidebar = styled.aside`
    min-width: 256px;

    @media (max-width: 960px) {
        display: none;
    }
`;

export const Grid = styled.div<{ compress: boolean }>`
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-column-gap: 16px;
    grid-row-gap: 16px;

    @media (min-width: 360px) {
        grid-template-columns: repeat(3, minmax(100px, 1fr));
    }
    @media (min-width: 600px) {
        grid-template-columns: repeat(5, minmax(100px, 1fr));
    }
    @media (min-width: 1280px) {
        grid-template-columns: repeat(${props => (props.compress ? 4 : 7)}, minmax(100px, 1fr));
    }
    @media (min-width: 1600px) {
        grid-template-columns: repeat(${props => (props.compress ? 7 : 10)}, minmax(100px, 1fr));
    }
`;
