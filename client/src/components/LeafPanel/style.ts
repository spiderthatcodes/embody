import styled from 'styled-components';
import { colors } from '../../theme';
import leaves from '../../resources/leaves.jpg';

export const Container = styled.div`
    height: 75vh;
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const Left = styled.div`
    background-image: url(${leaves});
    background-size: cover;
`;

export const Right = styled.div`
    background-color: ${colors.peach};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px;
`;

export const WhiteText = styled.p`
    color: ${colors.white};
    font-size: 40px;
`;

export const BlackText = styled.p`
    font-weight: 400;
    color: ${colors.black};
    font-size: 12px;
    text-align: center;
`;
