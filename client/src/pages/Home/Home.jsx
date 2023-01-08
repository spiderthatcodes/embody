import Layout from '../../components/Layout/Layout';
import TICSection from '../../components/TICSection/TICSection';
import { Left, RosePanel, Right, BlackText } from './style';

const Home = () => {
    return (
        <Layout>
            <TICSection />
            <RosePanel>
                <Left>
                    <BlackText>
                        Create a life that feels peaceful and authentic.
                    </BlackText>
                </Left>
                <Right />
            </RosePanel>
        </Layout>
    );
};

export default Home;
