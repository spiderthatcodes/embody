import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    height: 10vh;

`;

export const LinkContainer = styled.div`
    position: absolute;
    right: 80px;
    top: 25px;
    display: flex;
    width: 300px;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: ${colors.black};
    }

    .highlight {
        background: linear-gradient(to top, ${colors.peach} 50%, transparent 50%);
    }

`;

export const Title = styled.h1`
    font-size: 55px;
    line-height: 1px;
    color: ${colors.black};
`;

export const Subtitle = styled.p`
    font-size: 14px;
    line-height: 1px;
    color: ${colors.black};
`;

export const LogoContainer = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
`;
