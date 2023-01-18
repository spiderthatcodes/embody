import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    display: flex;
    padding: 20px 40px;
    align-items: center;
`;

export const LinkContainer = styled.div`
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
    text-align: left;
`;
