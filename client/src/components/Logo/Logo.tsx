import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Subtitle } from './style';

const Logo: FC = () => {
    const navigate: any = useNavigate();

    return (
        <Container>
            <Title onClick={() => navigate('/')}>Stephanie Morales</Title>
            <Subtitle onClick={() => navigate('/')}>
                Coaching & Counseling
            </Subtitle>
            
        </Container>
    );
};

export default Logo;
