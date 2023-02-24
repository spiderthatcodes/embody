import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 95vh;
    position: relative;
    margin-bottom: 10%;

    #stripe {
        height: 6vh;
        width: 100%;
        background-color: ${colors.tan};
        position: absolute;
        bottom: 30vh;
        z-index: -1;
        display: flex;
        align-items: center;
    }

    #text {
        margin-left: 10%;
        font-size: 20px;
    }

    #title {
        margin-left: 10%;
        position: absolute;
        font-size: 24px;
        top: 17vh;
    }

    span {
        background: linear-gradient(to top, ${colors.mint} 50%, transparent 50%);
    }

    #description {
        margin-left: 10%;
        position: absolute;
        top: 25vh;
        width: 35vw;
    }

    #bullets {
        margin-left: 10%;
        position: absolute;
        top: 40vh;
        width: 35vw;
    }

    #button {
        margin-left: 10%;
        position: absolute;
        bottom: 19vh;
    }
`;

export const ServicePanel = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 10%;
`;

export const ImageSide = styled.div`
    width: 45%;

    img {
        height: 58vh;
    }
`;
