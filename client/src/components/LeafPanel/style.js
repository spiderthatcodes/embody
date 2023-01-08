import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
`;

export const Left = styled.div`
    width: 50%;
    height: 550px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Right = styled.div`
    background-color: ${colors.peach};
    width: 50%;
    height: 550px;
`;
