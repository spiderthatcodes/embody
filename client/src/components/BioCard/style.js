import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ImageSide = styled.div`
    img {
        height: 60vh;
    }
`

export const TextSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;

    h1 {
        line-height: 14px;
    }

    p {
        line-height: 32px;
        text-align: center;
    }

    span {
        background: linear-gradient(to top, ${colors.peach} 50%, transparent 50%);
    }
`
