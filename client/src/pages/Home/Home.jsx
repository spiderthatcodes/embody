import Layout from '../../components/Layout/Layout';
import TICSection from '../../components/TICSection/TICSection';
import { Left, RosePanel, Right, BlackText, Leaves, PeachPanel, WhiteText } from './style';

const Home = () => {
    return (
        <Layout>
            <PeachPanel>
                <WhiteText>Find the community, connection and creative care you are looking for here with us.</WhiteText>
            </PeachPanel>
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
