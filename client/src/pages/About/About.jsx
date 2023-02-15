import BioCard from '../../components/BioCard/BioCard';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import NumberedCard from '../../components/NumberedCard/NumberedCard';
import { help, ayeshaText, stephanieText } from '../../constants/aboutPageData';
import ayesha from '../../resources/ayesha.jpg';
import stephanie from '../../resources/stephanie.jpg';
import laughing from '../../resources/laughing.jpg';
import {
    NumberedCardContainer,
    HelpSection,
    GreenStrip,
    BioCardContainer,
    TopImagePanel,
    LeftSide,
    RightSide,
} from './style';

const About = () => {
    return (
        <Layout>
            <TopImagePanel>
                <LeftSide>
                    <h1>We are passionate about helping you remember who you are.</h1>
                    <div></div>
                </LeftSide>
                <RightSide>
                    <img src={laughing} alt="ladies laughing" />
                </RightSide>
            </TopImagePanel>
            <BioCardContainer>
                <BioCard
                    name='Stephanie'
                    text={stephanieText}
                    imgSrc={stephanie}
                    imageLeft={true}
                />
                <BioCard
                    name='Ayesha'
                    text={ayeshaText}
                    imgSrc={ayesha}
                />
            </BioCardContainer>
            <GreenStrip>
                <p>We are here to help you thrive.</p>
            </GreenStrip>
            <HelpSection>
                <h1>We Can Help</h1>
                <NumberedCardContainer>
                    {help.map((point, index) => (
                        <NumberedCard
                            key={index}
                            number={point.number}
                            heading={point.heading}
                            text={point.text}
                        />
                    ))}
                </NumberedCardContainer>
                <Button
                    text='Learn more'
                    route='/services'
                />
            </HelpSection>
        </Layout>
    );
};

export default About;
