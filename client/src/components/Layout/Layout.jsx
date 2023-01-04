import React from 'react';
import Nav from '../Nav/Nav';
import { Container, Content } from './style';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
        <Container>
            <Nav />
            <Content>{children}</Content>
            <Footer />
        </Container>
);

export default Layout;
