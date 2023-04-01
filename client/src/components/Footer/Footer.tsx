import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {
    Container,
    EmailBar,
    LogoContainer,
    LinkContainer,
    NavRow,
} from './style';

const Footer: FC = () => {
    const windowSize = useRef([window.innerWidth]);
    return (
        <Container>
            <NavRow>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                {windowSize.current[0] > 900 && (
                    <LinkContainer>
                        <Link to='/about'>About</Link>
                        <Link to='/offerings'>Offerings</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/contact'>Contact</Link>
                    </LinkContainer>
                )}
            </NavRow>
            {windowSize.current[0] > 900 &&<EmailBar>
                <p>Personalized coaching & counseling</p>
                <p>embody@gmail.com</p>
            </EmailBar>}
        </Container>
    );
};

export default Footer;
