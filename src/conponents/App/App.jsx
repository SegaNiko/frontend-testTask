import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"

import {AppRouters} from "../../routes/AppRouters"

import '../../assets/scss/App.scss'

const App = () => {
  return (
  // <Provider>
    <Router>
       <AppRouters />
    </Router>
  // </Provider>
  );
}

export default App;
