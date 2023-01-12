import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
    Container,
    LogoContainer,
    Title,
    LinkContainer,
    Subtitle,
} from './style';

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
                <Link to='/about'>
                    <span
                        className={
                            location.pathname === '/about' ? 'highlight' : ''
                        }
                    >
                        &nbsp;About&nbsp;
                    </span>
                </Link>
                <Link to='/services'>
                    <span
                        className={
                            location.pathname === '/services' ? 'highlight' : ''
                        }
                    >
                        &nbsp;Services&nbsp;
                    </span>
                </Link>
                <Link to='/blog'>
                    <span
                        className={
                            location.pathname === '/blog' ? 'highlight' : ''
                        }
                    >
                        &nbsp;Blog&nbsp;
                    </span>
                </Link>
                <Link to='/contact'>
                    <span
                        className={
                            location.pathname === '/contact' ? 'highlight' : ''
                        }
                    >
                        &nbsp;Contact&nbsp;
                    </span>
                </Link>
            </LinkContainer>
        </Container>
    );
};

export default Nav;
