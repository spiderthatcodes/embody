import styled from 'styled-components';
import { colors } from '../../theme';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        color: ${colors.mint}
    }

    h2 {
        color: ${colors.black}
    }
`;
