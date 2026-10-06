import React from "react";
import CardsUi from "./CardsUi";
import './App.css'

const App = () => {
  return (
    <div>
      <CardsUi title = "1st Counter" des = "1st Counter"/>
      <CardsUi title = "2nd Counter"  des = "1st Counter"/>

      <CardsUi title = "3rd Counter" des = "1st Counter"/>

      <CardsUi title = "4th Counter"  des = "1st Counter"/>
      <CardsUi title = "5th Counter" des = "1st Counter"/>
      <CardsUi title = "6th Counter" des = "1st Counter"/>
      <CardsUi title = "7th Counter" des = "1st Counter"/>
    </div>
  );
};

export default App;
