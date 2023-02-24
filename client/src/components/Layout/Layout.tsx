import React, { FC, ReactNode } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Container, Content } from './style';

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
    <Container>
        <Nav />
        <Content>{children}</Content>
        <Footer />
    </Container>
);

export default Layout;
