import Layout from '../../components/Layout/Layout';
import TICSection from '../../components/TICSection/TICSection';
import { Left, RosePanel, Right, BlackText, Leaves } from './style';

const Home = () => {
    return (
        <Layout>
            <Leaves />
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
