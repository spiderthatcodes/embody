import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {
    Container,
    EmailBar,
    LogoContainer,
    LinkContainer,
    NavRow,
} from './style';


const Footer = () => {

    return (
        <Container>
            <NavRow>
                <LogoContainer>
                    <Logo />
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
