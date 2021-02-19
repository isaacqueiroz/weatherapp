import styled from 'styled-components';

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;
