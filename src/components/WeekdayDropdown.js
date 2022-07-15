import React from "react";
import Dropdown from "./DropdownMenu";

function WeekdayDropdown() {
  const weekdays = {
    items: [
      {
        id: 1,
        value: "Monday",
      },
      {
        id: 2,
        value: "Tuesday",
      },
      {
        id: 3,
        value: "Wednesday",
      },
      {
        id: 4,
        value: "Thurdsay",
      },
      {
        id: 5,
        value: "Friday",
      },
      {
        id: 6,
        value: "Saturday",
      },
      {
        id: 7,
        value: "Sunday",
      },
    ],
    title: "Weekday",
    docValue: "weekday",
  };

  return (
    <div>
      <Dropdown
        title={weekdays.title}
        items={weekdays.items}
        docValue={weekdays.docValue}
      />
    </div>
  );
}

export default WeekdayDropdown;
