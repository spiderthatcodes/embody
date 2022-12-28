import styled from 'styled-components';
import { colors } from '../../theme';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        color: ${colors.mint}
    }

    h2 {
        color: ${colors.black}
    }
`;
