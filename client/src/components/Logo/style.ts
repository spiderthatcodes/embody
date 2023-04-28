import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div<{ isMobile?: boolean }>`
    background-color: ${colors.peach};
    width: ${({ isMobile }) => (isMobile ? '100%' : '380px')};
    height: 40px;
    text-align: center;
    position: relative;
`;

export const Title = styled.h1`
    font-size: 35px;
    line-height: 0px;
    color: ${colors.black};
    cursor: pointer;
`;

export const Subtitle = styled.p`
    font-size: 15px;
    line-height: 0px;
    color: ${colors.black};
    position: absolute;
    top: 10px;
    left: 100px;
    cursor: pointer;
`;
