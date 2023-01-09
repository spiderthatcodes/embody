import Layout from '../../components/Layout/Layout';
import TICSection from '../../components/TICSection/TICSection';
import {
    Left,
    RosePanel,
    Right,
    BlackText,
    Leaves,
    PeachPanel,
    WhiteText,
    GreetingsPanel,
    ParagraphContainer,
} from './style';

const Home = () => {
    return (
        <Layout>
            <GreetingsPanel>
                <h1>Hello!</h1>
                <h2>We are so pleased you are here.</h2>
                <ParagraphContainer>
                <div id="left">
                <p>
                    We would like to share a little about our journey to
                    creating Embody.
                </p>
                <p>
                    We met many years ago when our sons were in preschool
                    together and became fast friends. Since that time we have
                    seen each other through a lot of life, love, loss and
                    growth. One point of connection between us is our shared
                    commitment to doing work that provides healing, growth and
                    expansion. Not just in our professional lives, but within
                    ourselves, our families, and our communities. We believe all
                    beings are capable of healing and feeling well if given
                    access to the right environment, supportive services, tools
                    and loving guidance to facilitate it.
                </p>
                </div>
                <div id="right">
                <p>
                    Our techniques are a blend of all we have learned, what has
                    been successful for others we’ve served and also what has
                    worked for us personally. There is no one size fits all when
                    it comes to this special type of work. We customize a plan
                    based on the physical, mental, emotional, environmental and
                    spiritual needs and priorities of each individual.
                </p>
                <p>
                    It has been a long time hope of ours to guide others through
                    this tender process, in a way that is truly aligned for us.
                    Out of this hope, Embody Coaching and Counseling was born.
                    Welcome! We hope you find the community, connection and
                    creative care you are looking for here with us. We are so
                    excited to work together!
                </p>
                </div>
                </ParagraphContainer>
            </GreetingsPanel>
            <PeachPanel>
                <WhiteText>
                    Find the community, connection and creative care you are
                    looking for here with us.
                </WhiteText>
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
