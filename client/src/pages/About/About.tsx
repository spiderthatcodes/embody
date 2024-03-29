import { FC } from 'react';
import BioCard from '../../components/BioCard/BioCard';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import NumberedCard from '../../components/NumberedCard/NumberedCard';
import { help, stephanieText } from '../../constants/aboutPage';
import { NumberedCardProps } from '../../types';
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
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const About: FC = () => {
    const isMobile = useSelector(
        (store: RootState) => store?.isMobile?.isMobile
    );

    return (
        <Layout isMobile={isMobile}>
            <TopImagePanel isMobile={isMobile}>
                <LeftSide isMobile={isMobile}>
                    {isMobile ? (
                        <>
                            <h1>
                                We are passionate about helping you remember
                            </h1>
                            <div id='mobilespan'>
                                <span className='greenStuff'>who you are.</span>
                            </div>
                        </>
                    ) : (
                        <h1>
                            We are passionate about helping you remember{' '}
                            <span className='greenStuff'>who you are.</span>
                        </h1>
                    )}
                    <div id='tanstripe'></div>
                </LeftSide>
                <RightSide isMobile={isMobile}>
                    <img
                        src={laughing}
                        alt='ladies laughing'
                    />
                </RightSide>
            </TopImagePanel>
            <BioCardContainer>
                <BioCard
                    name='Stephanie'
                    text={stephanieText}
                    imgSrc={stephanie}
                    imageLeft={true}
                />
            </BioCardContainer>
            <GreenStrip>
                <p>We are here to help you thrive.</p>
            </GreenStrip>
            <HelpSection>
                <h1>We Can Help</h1>
                <NumberedCardContainer>
                    {help.map((point: NumberedCardProps, index: number) => (
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
