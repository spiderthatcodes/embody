import React from 'react';
import Layout from '../../components/Layout/Layout';
import NumberedCard from '../../components/NumberedCard/NumberedCard';
import { contacts } from '../../constants/contactMethods';
import { LeavesPanel, MethodsSection, NumberedCardContainer } from './style';

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
            </MethodsSection>
            <LeavesPanel />
        </Layout>
    );
};

export default Contact;
