import { TIC } from '../../constants/TICpoints';
import NumberedCard from '../NumberedCard/NumberedCard';
import Button from '../Button/Button'
import { NumberedCardContainer, SectionHeading, ButtonContainer } from './style';

const TICSection = () => {
    return (
        <div>
            <SectionHeading>Trauma informed coaching and counseling</SectionHeading>
            <NumberedCardContainer>
                {TIC.map((point, index) => (
                    <NumberedCard
                        key={index}
                        number={point.number}
                        heading={point.heading}
                        text={point.text}
                    />
                ))}
            </NumberedCardContainer>
            <ButtonContainer>
                <Button text='Learn More' route='/contact' />
            </ButtonContainer>
        </div>
    );
};

export default TICSection;
