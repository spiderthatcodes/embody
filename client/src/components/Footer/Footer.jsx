import { useLocation } from 'react-router-dom';
import { Container } from './style';
import LeafPanel from '../LeafPanel/LeafPanel';

const Footer = () => {
    const location = useLocation();
    console.log(location.pathname);


    return (
        <Container>
            <LeafPanel page={location.pathname} />
            <div id='contact-bar'></div>
            <div id='email-bar'></div>
        </Container>
    );
};

export default Footer;
