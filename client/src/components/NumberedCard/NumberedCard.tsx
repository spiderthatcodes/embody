import { FC } from 'react';
import { NumberedCardProps } from '../../types';
import { CardContainer } from './style';

const NumberedCard: FC<NumberedCardProps> = ({ number, heading, text }) => {
    return (
        <CardContainer>
            <h1>{number}</h1>
              <h2><span>&nbsp;{heading}&nbsp;</span></h2>
            <p>{text}</p>
            
        </CardContainer>
    );
};

export default NumberedCard;
