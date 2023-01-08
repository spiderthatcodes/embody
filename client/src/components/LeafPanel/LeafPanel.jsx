import { Container, Left, Right } from './style';
import leaves from '../../resources/leaves.jpg';

const LeafPanel = () => {
    return (
        <Container>
            <Left>
                <img
                    src={leaves}
                    alt='leaves'
                />
            </Left>
            <Right></Right>
        </Container>
    );
};

export default LeafPanel;
