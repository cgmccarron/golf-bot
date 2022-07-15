import React from "react";
import Dropdown from "./DropdownMenu";

function TimeslotDropdown() {
  const course = {
    items: [
      { id: 0, value: "3:00" },
      { id: 1, value: "4:15" },
      { id: 2, value: "6:30" },
    ],
    title: "Timeslot",
    docValue: "timeslot",
  };

  return (
    <div>
      <Dropdown
        title={course.title}
        items={course.items}
        docValue={course.docValue}
      />
    </div>
  );
}

export default TimeslotDropdown;
