import styled from 'styled-components';

export const Link = styled.a`
    text-decoration: none;
`;
export const RegionLink = styled.li`
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: .25rem;
    margin-left: .23rem;
    border: 1px solid gray;
    border-radius: 0.40rem;
    padding: 0.3rem;
`;
export const RegionList = styled.ul`
    @media (min-width: 768px) {
        max-height: 10em;
    }    
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-inline-start: 0px;
    flex-direction: column;
    width: 100%;
`;
export const RegionPanel = styled.div`
    display: flex;
    flex-direction: column;
`;
