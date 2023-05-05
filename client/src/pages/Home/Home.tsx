import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Layout from '../../components/Layout/Layout';
import TICSection from '../../components/TICSection/TICSection';
import chatting from '../../resources/chatting.png';
import {
    Left,
    RosePanel,
    Right,
    BlackText,
    Leaves,
    PeachPanel,
    WhiteText,
    GreetingsPanel,
    RightColumn,
    LeftColumn,
    Hello,
    Script,
    Paragraph,
    // Embody,
    LeftParagraph,
    // TopLine,
    LearnMore,
    ImagePanel,
    Image,
    Stripe,
    ReadMoreButton,
    ReadMoreButtonContainer,
} from './style';

const Home: FC = () => {
    const [showIntro, setShowIntro] = useState<boolean>(false);
    const navigate = useNavigate();
    const isMobile: boolean = useSelector(
        (store: RootState) => store?.isMobile?.isMobile
    );

    return (
        <Layout isMobile={isMobile}>
            <ImagePanel isMobile={isMobile}>
                <Image
                    src={chatting}
                    alt='ladies chatting outside'
                    isMobile={isMobile}
                />
                {!isMobile && <Stripe />}
            </ImagePanel>
            <GreetingsPanel>
                <LeftColumn>
                    <Hello>Hello!</Hello>
                    <Script>I am so pleased you are here.</Script>
                    {isMobile && !showIntro && (
                        <ReadMoreButtonContainer>
                            <ReadMoreButton onClick={() => setShowIntro(true)}>
                                Read More
                            </ReadMoreButton>
                        </ReadMoreButtonContainer>
                    )}

                    <LeftParagraph>
                        We met many years ago when our sons were in preschool
                        together and became fast friends. Since that time we
                        have seen each other through a lot of life, love, loss
                        and growth. One point of connection between us is our
                        shared commitment to doing work that provides healing,
                        growth and expansion. Not just in our professional
                        lives, but within ourselves, our families, and our
                        communities. We believe all beings are capable of
                        healing and feeling well if given access to the right
                        environment, supportive services, tools and loving
                        guidance to facilitate it.
                    </LeftParagraph>
                </LeftColumn>
                <RightColumn>
                    <Paragraph>
                        Our techniques are a blend of all we have learned, what
                        has been successful for others we’ve served and also
                        what has worked for us personally. There is no one size
                        fits all when it comes to this special type of work. We
                        customize a plan based on the physical, mental,
                        emotional, environmental and spiritual needs and
                        priorities of each individual.
                    </Paragraph>
                    <Paragraph>
                        It has been a long time hope of ours to guide others
                        through this tender process, in a way that is truly
                        aligned for us. Out of this hope, Embody Coaching and
                        Counseling was born. Welcome! We hope you find the
                        community, connection and creative care you are looking
                        for here with us. We are so excited to work together!
                    </Paragraph>
                    <LearnMore onClick={() => navigate('/about')}>
                        Learn More &#10148;
                    </LearnMore>
                </RightColumn>
            </GreetingsPanel>

            <PeachPanel>
                <WhiteText>
                    Find the community, connection and creative care you are
                    looking for here with me.
                </WhiteText>
            </PeachPanel>
            {!isMobile && <Leaves />}

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
