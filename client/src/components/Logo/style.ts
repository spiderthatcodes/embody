import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    background-color: ${colors.peach};
    width: 380px;
    height: 40px;
    text-align: center;
    position: relative;
    @media (max-width: 900px) {
        width: 240px;
        height: 30px;
    }
`;

export const Title = styled.h1`
    font-size: 35px;
    line-height: 0px;
    color: ${colors.black};
    cursor: pointer;
    @media (max-width: 900px) {
        font-size: 24px;
    }
`;

export const Subtitle = styled.p`
    font-size: 15px;
    line-height: 0px;
    color: ${colors.black};
    position: absolute;
    top: 10px;
    left: 100px;
    cursor: pointer;
    @media (max-width: 900px) {
        font-size: 12px;
        top: 7px;
        left: 60px;
    }
`;
