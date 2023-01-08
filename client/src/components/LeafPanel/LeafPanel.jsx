import { BlackText, Container, Left, Right, WhiteText } from './style';
import leaves from '../../resources/leaves.jpg';
import Button from '../Button/Button';

const LeafPanel = () => {
    return (
        <Container>
            <Left>
                <img
                    src={leaves}
                    alt='leaves'
                />
            </Left>
            <Right>
                <WhiteText>Feeling stuck?</WhiteText>
                <WhiteText>Unsure what you need?</WhiteText>
                <BlackText>Let’s schedule a complimentary time to talk and explore what your body and mind may be craving, but you may not have the language for just yet.</BlackText>
                <Button text='Contact Us' route='/contact' />
            </Right>
        </Container>
    );
};

export default LeafPanel;
