import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Subtitle } from './style';

const Logo: FC = () => {
    const navigate: any = useNavigate();

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
