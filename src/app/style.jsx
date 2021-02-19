import styled from 'styled-components';

export const Container = styled.div`
        display:flex;
        flex-direction: column;
        @media (min-width: 768px) {
            padding-left: 6rem;
            padding-right: 6rem;
        }
        font-family: Montserrat, Arial, sans-serif;
`;
export const Header = styled.h1`
    line-height: 1.5;
    font-size: 24px;
    font-weight: 700;
    color: rgb(26, 26, 26);
    -webkit-font-smoothing: antialiased;
`;
