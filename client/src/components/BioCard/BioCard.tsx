import { FC } from 'react';
import { Container, ImageSide, TextSide } from './style';

interface BioCardProps {
    name: string;
    text: string;
    imgSrc: string;
    imageLeft?: boolean;
}


const BioCard: FC<BioCardProps> = ({ name, text, imgSrc, imageLeft = false }) => {
    return (
        <Container>
            {imageLeft && (
                <ImageSide>
                    <img
                        src={imgSrc}
                        alt={name}
                    />
                </ImageSide>
            )}
            <TextSide>
                <span>
                    <h1>&nbsp;Meet {name}&nbsp;</h1>
                </span>
                <p>{text}</p>
            </TextSide>
            {!imageLeft && (
                <ImageSide>
                    <img
                        src={imgSrc}
                        alt={name}
                    />
                </ImageSide>
            )}
        </Container>
    );
};

export default BioCard;
