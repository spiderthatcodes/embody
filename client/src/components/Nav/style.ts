import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div<{ isMobile?: boolean }>`
    display: flex;
    align-items: center;
    ${({ isMobile }) => isMobile && 'height: 10vh;'}
    padding: ${({ isMobile }) => (isMobile ? '10px 0 10px 0' : '20px 20px 20px 0')}
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
        background: linear-gradient(
            to top,
            ${colors.peach} 50%,
            transparent 50%
        );
    }
`;

export const LogoContainer = styled.div<{ isMobile?: boolean }>`
    width: 100%;
    margin: auto;
    text-align: left;
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    .open {
        display: block;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    .open {
        display: block;
    }

    a {
        color: black;
        padding: 6px 8px;
        text-decoration: none;
        display: block;
    }
`;

export const DropButton = styled.button`
    position: absolute;
    top: -16px;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
    color: ${colors.white};
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`;
