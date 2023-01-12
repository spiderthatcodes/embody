import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, LogoContainer, Title, LinkContainer, Subtitle } from './style';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);

    return (
        <Container>
            <LogoContainer onClick={() => navigate('/')}>
                <Title>Embody</Title>
                <Subtitle>Coaching & Counseling</Subtitle>
            </LogoContainer>
            <LinkContainer>
            {/* maybe add span, add highlight class if location is equal to Link path */}
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </LinkContainer>
        </Container>
    );
};

export default Nav;
