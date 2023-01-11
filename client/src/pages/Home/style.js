import styled from 'styled-components';
import { colors } from '../../theme';
import roses from '../../resources/roses.jpg';
import leaves from '../../resources/leaves.jpg';

export const RosePanel = styled.div`
    height: 75vh;
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const Left = styled.div`
    background-color: ${colors.peach};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px;
`;

export const Right = styled.div`
    background-image: url(${roses});
    background-size: cover;
`;

export const BlackText = styled.p`
    font-weight: 600;
    color: ${colors.black};
    font-size: 56px;
    text-align: center;
`;

export const Leaves = styled.div`
    background-image: url(${leaves});
    background-size: cover;
    width: 100%;
    height: 50vh;
`;

export const PeachPanel = styled.div`
    background-color: ${colors.peach};
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WhiteText = styled.p`
    color: ${colors.white};
    font-size: 40px;
    text-align: center;
    width: 45%;
`;

export const GreetingsPanel = styled.div`
    height: 70vh;
    padding: 0 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Hello = styled.h1`
    color: ${colors.peach};
    font-size: 36px;
    line-height: 1px;
`;

export const Script = styled.h2`
    font-size: 36px;
    position: relative;
    top: -25px;
    left: 2%;
`;

export const Embody = styled.h1`
    font-size: 40px;
    font-weight: 400;
    position: absolute;
    top: 100px;
    left: 35%;

    span {
        background: linear-gradient(to top, ${colors.peach} 50%, transparent 50%);
    }
`;

export const LeftColumn = styled.div`
    position: relative;
`;

export const RightColumn = styled.div`
    padding-top: 30px;
`;

export const Paragraph = styled.p`
    width: 500px;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 35px;
`;

export const LeftParagraph = styled.div`
    width: 440px;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 35px;
    position: relative;
    left: 40px;
    top: -30px;
`;

export const TopLine = styled.div`
    width: 300px;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 35px;
    position: relative;
    left: 40px;
    top: -30px;
`;

export const LearnMore = styled.button`
    color: ${colors.peach};
    border: none;
    background: none;
    font-size: 32px;
`;

export const ImagePanel = styled.div`
    height: 120vh;
    width: 100%;
`;

export const PeachSquare = styled.div`
    height: 60vh;
    width: 60%;
    background-color: ${colors.peach};
`;
