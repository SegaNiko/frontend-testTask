import React from 'react'
import { Logo } from '../Logo/Logo'

import "../../assets/scss/Header.scss"
import { Container } from '../Container/Container'

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrap">
          <Logo />
        </div>   
      </Container>
    </header>
  )
}
