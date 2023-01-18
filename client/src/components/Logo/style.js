import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    background-color: ${colors.peach};
    width: 280px;
    height: 45px;
    text-align: center;
    position: relative;
`;

export const Title = styled.h1`
    font-size: 55px;
    line-height: 0px;
    color: ${colors.black};
`;

export const Subtitle = styled.p`
    font-size: 15px;
    line-height: 0px;
    color: ${colors.black};
    position: absolute;
    top: 18px;
    left: 60px;
`;
