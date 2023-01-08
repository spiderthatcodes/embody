import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
`;

export const Left = styled.div`
    width: 50%;
    height: 550px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Right = styled.div`
    background-color: ${colors.peach};
    width: 50%;
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
