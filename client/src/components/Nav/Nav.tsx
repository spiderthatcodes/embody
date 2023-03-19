import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {
    Container,
    LogoContainer,
    LinkContainer,
} from './style';

const Nav: FC = () => {
    const location: any = useLocation();

    return (
        <Container>
            <LogoContainer>
                <Logo />
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
                            location.pathname.includes('/services') ? 'highlight' : ''
                        }
                    >
                        &nbsp;Offerings&nbsp;
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
