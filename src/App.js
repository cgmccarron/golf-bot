import React from "react";
import "./App.css";
import "./App.scss";
import Title from "./components/Title";
import WeekdayDropdown from "./components/WeekdayDropdown";
import CourseDropdown from "./components/CourseDropdown";
import TimeslotDropdown from "./components/TimeslotDropdown";
import { DocProvider } from "./components/DocProvider";
import AddTeeTime from "./components/AddTeeTimes";

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>

      <div>
        <DocProvider>
          <CourseDropdown />
          <WeekdayDropdown />
          <TimeslotDropdown />
          <AddTeeTime />
        </DocProvider>
      </div>
    </div>
  );
}

export default App;
