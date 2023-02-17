import { Container, ImageSide, TextSide } from './style';

const BioCard = ({ name, text, imgSrc, imageLeft = false }) => {
    return (
        <Container imageLeft={imageLeft}>
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
