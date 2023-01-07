import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const EmailBar = styled.div`
    border-top: solid #F1F3F4 1px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
`;

export const LinkContainer = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: ${colors.black};
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

export const NavRow = styled.div`
    display: flex;
    padding: 20px 80px;
    align-items: center;
`;
