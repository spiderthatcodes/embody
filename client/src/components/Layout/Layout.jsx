import React from 'react';
import Nav from '../Nav/Nav';
import { Container } from './style';

const Layout = ({ children }) => (
    <Container>
        <Nav />
        <div>{children}</div>
        {/* footer here */}
    </Container>
)

export default Layout;
