import { useLocation } from 'react-router-dom';
import { Container, EmailBar } from './style';
import LeafPanel from '../LeafPanel/LeafPanel';

const Footer = () => {
    const location = useLocation();


    return (
        <Container>
            <LeafPanel page={location.pathname} />
            <div id='contact-bar'></div>
            <EmailBar>
                <p>Personalized coaching & counseling</p>
                <p>embody@gmail.com</p>
            </EmailBar>
        </Container>
    );
};

export default Footer;
