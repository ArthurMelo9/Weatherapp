import React from "react";
import Searchbox from './searchbox';
import Locationbox from "./locationbox";
import Weatherbox from './weatherbox';
import LogInBox from './LogInBox'
const api = {
  key: "61bac87800b74d8c2f3709449e8ef72b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  return (
    <div className="App">
      <Searchbox />
      <Locationbox />
      <Weatherbox />
      <LogInBox />
    </div >
  );
}

export default App;
