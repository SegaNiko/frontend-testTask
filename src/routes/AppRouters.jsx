import React from "react"

import { Switch, Route, Redirect } from "react-router-dom"

import { NotFound } from "../conponents/NotFound/NotFound"
import { ChartsPage } from "../pages/ChartsPage/ChartsPage"
import { MainPage } from "../pages/MainPage/MainPage"
import { StatsPage } from "../pages/StatsPage/StatsPage"


export const AppRouters = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/stats">
        <StatsPage></StatsPage>
      </Route>
      {/* из-за особеностей прокси запросов с фронта назвал роут  {api} фиксится при деплое на {user}*/}
      <Route exact path="/api/:id">
        <ChartsPage></ChartsPage>
      </Route>
      <Route path="/404">
        <NotFound />
      </Route>
    
      <Redirect to="/404">
      </Redirect>
    </Switch>
  )
}
