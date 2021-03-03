import React from 'react'

import { NavLink } from "react-router-dom"
import { Header } from "../../conponents/Header/Header"
import { Footer } from "../../conponents/Footer/Footer"
import { Container } from "../../conponents/Container/Container"
import { Button } from "../../conponents/Button/Button"
import { Card } from '../../conponents/Card/Card'

import icon1 from "../../assets/img/icon_1.png"
import icon2 from "../../assets/img/icon_2.png"
import icon3 from "../../assets/img/icon_3.png"

import "../../assets/scss/Main.scss"

export const MainPage = () => {
  return (
    <>
     <Header />
      <main className="main">
        <div className="index">
          <Container>
            <div className="index__wrap">
              <div className="index__info">
                <h1 className="index__title"><b>Brainstorming</b> for desired perfect Usability</h1>
                <p className="index__text">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                <NavLink
                  className="link"
                  to='/stats'
                >
                  <Button clas="index__btn">Views Stats</Button>
                </NavLink>
              </div>
              <div className="index__img">
                
              </div>
            </div>
         </Container>
        </div>
        <div className="service">
          <Container>
          <div className="service__wrap">
            <h2 className="service__title">Why <b>small business owners love</b> AppCo?</h2>
            <p className="service__text">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            <div className="service__card-wrap">
              <Card path={icon1} title={"Clean Design"}>Increase sales by showing true dynamics of your website.</Card>
              <Card path={icon2} title={"Secure Data"}>Build your online store’s trust using Social Proof & Urgency.</Card>
              <Card path={icon3} title={"Retina Ready"}>Realize importance of social proof in customer’s purchase decision.</Card>             
            </div>
            <div className='input__wrap'>
              <input type="text" className="input" placeholder="Enter your email"/>
              <Button clas="input__btn">Subscribe</Button>
            </div>
          </div>
          </Container>
        </div>
      </main>
      <Footer isMain={true}/>
    </>
  )
}
