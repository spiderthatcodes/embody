import React from 'react'
import Logo from '../../constants/Logo/Logo'
import Links from '../../constants/Links/Links'
import { Container } from './style'

const Nav = () => {
  return (
    <Container>
        <Logo />
        <Links />
    </Container>
  )
}

export default Nav
