import { Link } from "react-router-dom"
import { LinkContainer } from "./style"

const Links = ({navbar}) => {
  return (
    <LinkContainer>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        {/* ternary showing cart if navbar (or null for now) and instagram icon for footer */}
    </LinkContainer>
  )
}

export default Links
