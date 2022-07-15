import React, { useEffect, useState } from "react";
import "./App.css";
import "./App.scss";
import Title from "./components/Title";
import AddTeeTime from "./components/AddTeeTimes";
import WeekdayDropdown from "./components/WeekdayDropdown";
import { DocProvider, useDocContext } from "./components/DocProvider";

function App() {
  const doc = useDocContext();
  return (
    <div className="App">
      <div>
        <Title />
      </div>

      <div>
        <DocProvider>
          <WeekdayDropdown />
        </DocProvider>
      </div>
    </div>
  );
}

export default App;
