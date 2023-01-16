import styled from 'styled-components';
import leaves from '../../resources/leaves.jpg';

export const LeavesPanel = styled.div`
    background-image: url(${leaves});
    background-size: cover;
    height: 50vh;
`;

export const NumberedCardContainer = styled.div`
    column-gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    width: 100%;
    margin: 16px 0;
`;

export const MethodsSection = styled.div`
    width: 60%;
    margin: auto;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 40px;
        font-weight: 400;
    }
`;

