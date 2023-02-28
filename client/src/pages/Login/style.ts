import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64vh;
`;

export const LoginBox = styled.div`
    padding: 5%;
    border: 2px solid ${colors.mint};

    input {
        padding: 5px;
        margin: 5px;
    }

    span {
        background: linear-gradient(to top, ${colors.peach} 50%, transparent 50%);
    }

    button {
        background: ${colors.mint};
        color: ${colors.white};
        border: none;
        padding: 10px;
        margin: 15px 5px;
    }
`;
