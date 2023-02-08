import { Container, Left, Right } from "./style"

const BioCard = ({name, text}) => {
  return (
    <Container>
        <Left>

        </Left>
        <Right>
            <h1>Meet {name}</h1>
            <p>{text}</p>
        </Right>

    </Container>
  )
}

export default BioCard
