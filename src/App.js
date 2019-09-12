import React from "react";
import Header from "./components/Header";
import ListEvents from "./components/ListEvents";
function App(props) {
  return (
    <div className="App">
      <Header />
      <ListEvents />
    </div>
  );
}

export default App;
