import React from 'react'

import { Logo } from '../Logo/Logo'
import { Container } from '../Container/Container'

import "../../assets/scss/Header.scss"

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
