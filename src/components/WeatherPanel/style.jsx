import styled from 'styled-components';

export const CardItem = styled.li`
    background-color: white;
    box-shadow: 0 10px 20px -10px rgba(0,0,0,0.12);
    border: 1px solid gray;
    border-radius: 0.40rem;
    display:flex;
    padding: 1rem;    
    list-style: none;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        width: 15.3333%;
        margin-bottom: 0rem;
    }   
`;
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
`;
