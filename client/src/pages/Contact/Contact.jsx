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
} from './style';

const Contact = () => {
    return (
        <Layout>
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
                <MessageForm>
                    <Inputs>
                        <input
                            type='text'
                            placeholder='Full Name'
                        />
                        <input
                            type='text'
                            placeholder='Email Address'
                        />
                    </Inputs>
                    <textarea
                        name='message'
                        placeholder='Message'
                    ></textarea>
                </MessageForm>
            </MethodsSection>
            <LeavesPanel />
        </Layout>
    );
};

export default Contact;
