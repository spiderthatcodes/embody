import { useNavigate } from 'react-router-dom';
import { Container, Title, Subtitle } from './style';

const Logo = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title onClick={() => navigate('/')}>Embody</Title>
            <Subtitle onClick={() => navigate('/')}>
                Wellness Collective
            </Subtitle>
        </Container>
    );
};

export default Logo;
