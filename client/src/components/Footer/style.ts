import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
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

export const LogoContainer = styled.div`
    width: 100%;
    margin: auto;
    text-align: left;
`;

export const NavRow = styled.div`
    display: flex;
    padding: 20px 80px 20px 40px;
    align-items: center;
`;
