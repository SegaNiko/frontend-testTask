import React from "react";
import { Switch, Route } from "react-router-dom";

import { ChartsPage } from "../pages/ChartsPage/ChartsPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { StatsPage } from "../pages/StatsPage/StatsPage";


export const AppRouters = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/stats">
        <StatsPage></StatsPage>
      </Route>
      <Route exact path="/charts">
        <ChartsPage></ChartsPage>
      </Route>
      <Route exact path="*"></Route>
    </Switch>
  )
}
