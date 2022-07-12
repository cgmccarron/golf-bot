import React from "react";
import "./App.css";
import Title from "./components/Title";
import AddTeeTime from "./components/AddTeeTimes";

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTeeTime />
      </div>
    </div>
  );
}

export default App;
