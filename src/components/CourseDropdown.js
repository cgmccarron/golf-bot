import React from "react";
import Dropdown from "./DropdownMenu";

function CourseDropdown() {
  const course = {
    items: [
      { id: 8, value: "Purdue" },
      { id: 9, value: "Oklahoma" },
      { id: 10, value: "New York" },
    ],
    title: "Course",
    docValue: "course",
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

export default CourseDropdown;
