import React from 'react';
import Layout from '../../components/Layout/Layout';
import NumberedCard from '../../components/NumberedCard/NumberedCard';
import { contacts } from '../../constants/contactMethods';
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

const Contact = () => {
    return (
        <Layout>
            <ImagePanel>
                <ImageSide />
                <TextSide>
                    <p>Questions?</p>
                    <p>We're here to help.</p>
                </TextSide>
            </ImagePanel>
            <MethodsSection>
                <h1>How to Get In Touch</h1>
                <NumberedCardContainer>
                    {contacts.map((point, index) => (
                        <NumberedCard
                            key={index}
                            number={point.number}
                            heading={point.heading}
                            text={point.text}
                        />
                    ))}
                </NumberedCardContainer>
                <MessageForm action='mailto:jessicaldickerson@outlook.com' method="post" enctype="text/plain">
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
                    <input type="submit" value="Send" />
                </MessageForm>
            </MethodsSection>
            <LeavesPanel />
        </Layout>
    );
};

export default Contact;
