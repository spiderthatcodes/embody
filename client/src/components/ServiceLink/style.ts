import styled from 'styled-components';
import { colors } from '../../theme';

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 40vh;
        width: auto;
    }

    span {
        background: linear-gradient(to top, ${colors.mint} 50%, transparent 50%);
    }
`;
