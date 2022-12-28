import { Link, useNavigate } from 'react-router-dom';
import { Container, LogoContainer, Title, LinkContainer, Subtitle } from './style';

const Nav = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer onClick={() => navigate('/')}>
                <Title>Embody</Title>
                <Subtitle>Coaching & Counseling</Subtitle>
            </LogoContainer>
            <LinkContainer>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </LinkContainer>
        </Container>
    );
};

export default Nav;
