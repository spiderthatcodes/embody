import { useNavigate, Link } from 'react-router-dom';
import {
    Container,
    EmailBar,
    LogoContainer,
    Title,
    Subtitle,
    LinkContainer,
    NavRow,
} from './style';


const Footer = () => {
    // const location = useLocation();
    const navigate = useNavigate();

    return (
        <Container>
            <NavRow>
                <LogoContainer>
                    <Title onClick={() => navigate('/')}>Embody</Title>
                    <Subtitle onClick={() => navigate('/')}>Coaching & Counseling</Subtitle>
                </LogoContainer>
                <LinkContainer>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                </LinkContainer>
            </NavRow>
            <EmailBar>
                <p>Personalized coaching & counseling</p>
                <p>embody@gmail.com</p>
            </EmailBar>
        </Container>
    );
};

export default Footer;
