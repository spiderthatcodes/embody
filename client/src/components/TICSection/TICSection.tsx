import { FC } from 'react';
import { TIC } from '../../constants/TICpoints';
import NumberedCard from '../NumberedCard/NumberedCard';
import Button from '../Button/Button';
import { NumberedCardProps } from '../../types';
import {
    NumberedCardContainer,
    SectionHeading,
    ButtonContainer,
    Container,
    AlignmentLayer
} from './style';

const TICSection: FC = () => {
    return (
        <Container>
            <AlignmentLayer>
                <SectionHeading>Trauma Informed Coaching</SectionHeading>
                <NumberedCardContainer>
                    {TIC.map((point: NumberedCardProps, index: number) => (
                        <NumberedCard
                            key={index}
                            number={point.number}
                            heading={point.heading}
                            text={point.text}
                        />
                    ))}
                </NumberedCardContainer>
                <ButtonContainer>
                    <Button
                        text='Learn More'
                        route='/contact'
                    />
                </ButtonContainer>
            </AlignmentLayer>
        </Container>
    );
};

export default TICSection;
