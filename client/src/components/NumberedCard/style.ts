import styled from 'styled-components';
import { colors } from '../../theme';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        color: ${colors.mint};
        font-size: 50px;
        line-height: 10px;
    }

    h2 {
        color: ${colors.black};
        font-size: 20px;
        
    }

    span {
        background: linear-gradient(to top, ${colors.peach} 50%, transparent 50%);
    }

    #highlight {
        position: relative;
        top: 0px;
        height: 10px;
        
        width: 105%;
    }
`;
