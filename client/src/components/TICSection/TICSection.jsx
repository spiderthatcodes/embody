import { TIC } from '../../constants/TICpoints';
import NumberedCard from '../NumberedCard/NumberedCard';
import { NumberedCardContainer, SectionHeading } from './style';

const TICSection = () => {
    return (
        <div>
            <SectionHeading>Trauma informed coaching and counseling</SectionHeading>
            <NumberedCardContainer>
                {TIC.map((point) => (
                    <NumberedCard
                        number={point.number}
                        heading={point.heading}
                        text={point.text}
                    />
                ))}
            </NumberedCardContainer>
        </div>
    );
};

export default TICSection;
