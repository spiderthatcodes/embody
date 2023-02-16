import styled from 'styled-components';
import { colors } from '../../theme';

export const ServiceTypes = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`;

export const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const TitleContainer = styled.div`
    background-color: ${colors.tan};
    height: 70px;
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 400;
        font-size: 48px;
        }

`;
