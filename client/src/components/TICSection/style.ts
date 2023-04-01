import styled from 'styled-components';

export const NumberedCardContainer = styled.div`
    column-gap: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
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
`;

export const Container = styled.div`
    display: flex;
    padding: 80px 20px;
    justify-content: center;
`;

export const AlignmentLayer = styled.div`
    max-width: 1440px;
`;
