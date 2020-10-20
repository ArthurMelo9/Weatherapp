import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import welcomePage from './welcomePage';
import WeatherApp from './WeatherApp';





function App() {

  return (
    <Router>
      <div className="App">


        <WeatherApp />


        <Route path="/welcomePage" exact component={welcomePage} />


      </div >
    </Router>
  );
}

export default App;
