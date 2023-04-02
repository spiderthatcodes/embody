import styled from 'styled-components';
import { colors } from '../../theme';

export const NumberedCardContainer = styled.div`
    column-gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    margin: 16px 0;
    @media (max-width: 900px) {
        height: auto;
        display: block;
    }
`;

export const HelpSection = styled.div`
    width: 70%;
    margin: auto;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 40px;
        font-weight: 400;
    }

    @media (max-width: 900px) {
        height: 120vh;
    }
`;

export const GreenStrip = styled.div`
    background-color: ${colors.mint};
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: ${colors.white};
        font-size: 36px;
    }

    @media (max-width: 900px) {
        height: 20vh;
        p {
        font-size: 24px;
    }
    }
`;

export const BioCardContainer = styled.div`
    padding: 150px;

    div:first-child {
        margin-bottom: 46px;
    }
`;

export const TopImagePanel = styled.div`
    display: flex;
    width: 100%;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55vw;

    h1 {
        text-align: left;
        width: 35vw;
        margin-bottom: 100px;
        line-height: 64px;
        font-weight: 400;
        font-size: 40px;
    }

    .greenStuff {
        font-weight: 700;
        font-size: 44px;
        display: inline-block;
        border-bottom: 6px solid ${colors.mint};
    }

    div {
        height: 25vh;
        width: 100%;
        background-color: ${colors.tan};
    }
`;

export const RightSide = styled.div`
    img {
        width: 45vw;
    }
`;
