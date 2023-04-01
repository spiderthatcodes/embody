import styled from 'styled-components';

export const NumberedCardContainer = styled.div`
    column-gap: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
        column-gap: 2px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0;
`;

export const SectionHeading = styled.h1`
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    @media (max-width: 900px) {
        font-size: 36px;
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 80px 20px;
    justify-content: center;
    @media (max-width: 900px) {
        padding: 20px 20px;
    }
`;

export const AlignmentLayer = styled.div`
    max-width: 1440px;
`;
