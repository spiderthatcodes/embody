import { useHistory, useLocation } from 'react-router-dom';
import { Container } from './style';

const Footer = () => {
    const location = useLocation();
    console.log(location.pathname);

    const history = useHistory();
    console.log(history.location.pathname);
    return (
        <Container>
            <div id='leaves'></div>
            <div id='contact-bar'></div>
            <div id='email-bar'></div>
        </Container>
    );
};

export default Footer;
