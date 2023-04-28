import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Subtitle } from './style';

const Logo: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
    const navigate: any = useNavigate();

    return (
        <Container isMobile={isMobile}>
            <Title onClick={() => navigate('/')}>Stephanie Morales</Title>
            <Subtitle onClick={() => navigate('/')}>
                Coaching & Counseling
            </Subtitle>
        </Container>
    );
};

export default Logo;
