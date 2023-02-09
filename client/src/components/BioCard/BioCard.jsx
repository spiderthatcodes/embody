import { Container, Left, Right } from "./style"

const BioCard = ({name, text, imgSrc}) => {
  return (
    <Container>
        <Left>
            <img src={imgSrc} alt={name} />
        </Left>
        <Right>
            <h1>Meet {name}</h1>
            <p>{text}</p>
        </Right>

    </Container>
  )
}

export default BioCard
