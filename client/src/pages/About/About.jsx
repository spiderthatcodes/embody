import BioCard from '../../components/BioCard/BioCard';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import NumberedCard from '../../components/NumberedCard/NumberedCard';
import { help } from '../../constants/aboutPageData';
import { leaves } from '../../resources/leaves.jpg'
import { NumberedCardContainer, HelpSection, GreenStrip } from './style';

const About = () => {
    return (
        <Layout>
            <BioCard name='Stephanie' text='test' imgSrc={leaves} />
            <BioCard name='Alyssa' text='test' imgSrc={leaves} />
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
                <Button text='Learn more' route='/services' />
            </HelpSection>
        </Layout>
    );
};

export default About;
