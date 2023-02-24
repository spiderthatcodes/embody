import { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import NumberedCard from '../../components/NumberedCard/NumberedCard';
import { contacts } from '../../constants/contactInfo';
import { NumberedCardProps } from '../../constants/aboutPage';
import {
    LeavesPanel,
    MethodsSection,
    NumberedCardContainer,
    MessageForm,
    Inputs,
    ImagePanel,
    ImageSide,
    TextSide,
} from './style';

const Contact: FC = () => {
    return (
        <Layout>
            <ImagePanel>
                <ImageSide />
                <TextSide>
                    <p>Questions?</p>
                    <p id='second'>We're here to help.</p>
                    <div />
                </TextSide>
            </ImagePanel>
            <MethodsSection>
                <h1>How to Get In Touch</h1>
                <NumberedCardContainer>
                    {contacts.map((point: NumberedCardProps, index: number) => (
                        <NumberedCard
                            key={index}
                            number={point.number}
                            heading={point.heading}
                            text={point.text}
                        />
                    ))}
                </NumberedCardContainer>
                <MessageForm
                    action='mailto:jessicaldickerson@outlook.com'
                    method='post'
                    encType='text/plain'
                >
                    <Inputs>
                        <input
                            type='text'
                            name='name'
                            placeholder='Full Name'
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='Email Address'
                        />
                    </Inputs>
                    <textarea
                        name='message'
                        placeholder='Message'
                    ></textarea>
                    <input
                        type='submit'
                        value='Send'
                    />
                </MessageForm>
            </MethodsSection>
            <LeavesPanel />
        </Layout>
    );
};

export default Contact;
