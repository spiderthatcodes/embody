import styled from 'styled-components';

export const ServiceTypes = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 60px;
    }
`;

export const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 40vh;
        width: auto;
    }
`;
