import { FC, ReactNode } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Container, Content } from './style';

type LayoutType = {
    children: ReactNode,
    isMobile?: boolean
}

const Layout: FC<LayoutType> = ({ children, isMobile }) => (
   
    
    <Container>
        <Nav isMobile={isMobile} />
        <Content>{children}</Content>
        <Footer />
    </Container>
);

export default Layout;
