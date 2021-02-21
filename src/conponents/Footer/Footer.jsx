import React from 'react'
import { Container } from '../Container/Container'

import "../../assets/scss/Footer.scss"

export const Footer = ({isMain}) => {
  return (
    <footer className={isMain ? "footer" : "footer footer__default" }>
      <Container>
        <div className="footer__wrap">
          <p className="footer__logo">AppLogo</p>
          <p className="footer__reserved">All rights reserved by ThemeTags</p>
          <p className="footer__copyright">Copyrights © 2019.</p>
        </div>
      </Container>
    </footer>
  )
}
