import { FC, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { Container, LogoContainer, LinkContainer, DropdownContent, DropButton, Dropdown } from './style';

const Nav: FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const location: any = useLocation();
    const windowSize = useRef([window.innerWidth]);

    console.log(windowSize.current[0]);

    return (
        <Container>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            {windowSize.current[0] > 900 ? (
                <LinkContainer>
                    <Link to='/about'>
                        <span
                            className={
                                location.pathname === '/about'
                                    ? 'highlight'
                                    : ''
                            }
                        >
                            &nbsp;About&nbsp;
                        </span>
                    </Link>
                    <Link to='/services'>
                        <span
                            className={
                                location.pathname.includes('/offerings')
                                    ? 'highlight'
                                    : ''
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
                                location.pathname === '/contact'
                                    ? 'highlight'
                                    : ''
                            }
                        >
                            &nbsp;Contact&nbsp;
                        </span>
                    </Link>
                </LinkContainer>
            ) : (
                    <Dropdown className={dropdownOpen ? 'open' : ''}>
                        <DropButton onClick={() => setDropdownOpen(!dropdownOpen)} className={dropdownOpen ? 'open' : ''}>&#9776;</DropButton>
                        <DropdownContent className={dropdownOpen ? 'open' : ''} >
                            <Link to='/about'>
                                <span
                                    className={
                                        location.pathname === '/about'
                                            ? 'highlight'
                                            : ''
                                    }
                                >
                                    &nbsp;About&nbsp;
                                </span>
                            </Link>
                            <Link to='/services'>
                                <span
                                    className={
                                        location.pathname.includes('/offerings')
                                            ? 'highlight'
                                            : ''
                                    }
                                >
                                    &nbsp;Offerings&nbsp;
                                </span>
                            </Link>
                            <Link to='/blog'>
                                <span
                                    className={
                                        location.pathname === '/blog'
                                            ? 'highlight'
                                            : ''
                                    }
                                >
                                    &nbsp;Blog&nbsp;
                                </span>
                            </Link>
                            <Link to='/contact'>
                                <span
                                    className={
                                        location.pathname === '/contact'
                                            ? 'highlight'
                                            : ''
                                    }
                                >
                                    &nbsp;Contact&nbsp;
                                </span>
                            </Link>
                        </DropdownContent>
                    </Dropdown>
            )}
        </Container>
    );
};

export default Nav;
