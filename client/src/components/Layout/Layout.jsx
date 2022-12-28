import React from 'react';
import Nav from '../Nav/Nav';
import { Container, Content } from './style';

const Layout = ({ children }) => (
        <Container>
            <Nav />
            <Content>{children}</Content>
            {/* footer here */}
        </Container>
);

export default Layout;
