import styled from 'styled-components';
import { colors } from '../../theme';

export const NumberedCardContainer = styled.div`
    column-gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    margin: 16px 0;
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
`;

export const BioCardContainer = styled.div`
    padding: 150px;

    div:first-child {
    margin-bottom: 46px;;
}
`;
