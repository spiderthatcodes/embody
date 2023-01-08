import styled from 'styled-components';
import { colors } from '../../theme';
import roses from '../../resources/roses.jpg';
import leaves from '../../resources/leaves.jpg';

export const RosePanel = styled.div`
    height: 75vh;
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const Left = styled.div`
    background-color: ${colors.peach};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px;
`;

export const Right = styled.div`
    background-image: url(${roses});
    background-size: cover;
`;

export const BlackText = styled.p`
    font-weight: 600;
    color: ${colors.black};
    font-size: 56px;
    text-align: center;
`;

export const Leaves = styled.div`
    background-image: url(${leaves});
    background-size: cover;
    width: 100%;
    height: 50vh;
`;
