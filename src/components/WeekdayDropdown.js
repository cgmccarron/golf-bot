import React from "react";
import Dropdown from "./DropdownMenu";
import { DocProvider, useDocContext, useDocUpdateContext } from "./DocProvider";

function WeekdayDropdown() {
  const docContext = useDocContext();
  const toggleContext = useDocUpdateContext(docContext);
  const weekdays = [
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
  ];

  return (
    <div>
      <p>{JSON.stringify(docContext)}</p>
      <Dropdown title="Weekday" items={weekdays} docValue="weekday" />
    </div>
  );
}

export default WeekdayDropdown;
