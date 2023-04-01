import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    width: 100%;
    @media (max-width: 900px) {
        height: 18vh;
        display: flex;
        /* flex-direction: column; */
    }
`;

export const EmailBar = styled.div`
    border-top: solid #F1F3F4 1px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    @media (max-width: 900px) {
        /* height: 10vh; */
        display: block;
    }
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
    @media (max-width: 900px) {
        margin: none;
        height: 10vh;
    }
`;

export const NavRow = styled.div`
    display: flex;
    padding: 20px 80px 20px 40px;
    align-items: center;
    @media (max-width: 900px) {
        padding: 0;
        height: 10vh;
    }
`;
