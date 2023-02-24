import { FC } from "react";
import Button from '../Button/Button';
import { BlackText, Container, Left, Right, WhiteText } from './style';

const LeafPanel: FC = () => {
    return (
        <Container>
            <Left />
            <Right>
                <WhiteText>Feeling stuck?</WhiteText>
                <WhiteText>Unsure what you need?</WhiteText>
                <BlackText>Let&#39;s schedule a complimentary time to talk and explore what your body and mind may be craving, but you may not have the language for just yet.</BlackText>
                <Button text='Contact Us' route='/contact' />
            </Right>
        </Container>
    );
};

export default LeafPanel;
