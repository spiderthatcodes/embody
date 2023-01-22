import styled from 'styled-components';
import leaves from '../../resources/leaves.jpg';

export const LeavesPanel = styled.div`
    background-image: url(${leaves});
    background-size: cover;
    height: 50vh;
`;

export const NumberedCardContainer = styled.div`
    column-gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    width: 100%;
    margin: 16px 0;
`;

export const MethodsSection = styled.div`
    width: 60%;
    margin: auto;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 40px;
        font-weight: 400;
    }
`;

export const MessageForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    textarea {
        height: 100px;
        padding: 10px;
    }
`;

export const Inputs = styled.div`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;

    input {
        width: 45%;
        padding: 10px;
    }
`;

export const ImagePanel = styled.div`
    height: 70vh;
    display: flex;
`;

export const ImageSide = styled.div`
    width: 60%;
    background-image: url(${leaves});
    background-size: cover;
    height: 100%;
`;

export const TextSide = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
        margin-left: 40px;
        font-size: 56px;
        line-height: 10px;
    }
`;