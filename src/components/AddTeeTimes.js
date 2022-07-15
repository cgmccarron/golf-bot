import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useDocContext, useDocUpdateContext } from "./DocProvider";
import { Timestamp } from "firebase/firestore";
import Button from "@mui/material/Button";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

export default function AddTeeTime() {
  const docContext = useDocContext();
  const toggleContext = useDocUpdateContext(docContext);
  const handleOnClick = async () => {
    console.log("was clicked");
    if (
      docContext["course"] !== "" &&
      docContext["weekday"] !== "" &&
      docContext["timeslot"] !== ""
    ) {
      const dbRef = collection(db, "golf-times");
      const data = {
        ...docContext,
        when_requested: Timestamp.fromDate(new Date()),
      };
      await addDoc(dbRef, data);
      toggleContext(docContext, "all", null);
      console.log(docContext);
    } else {
      console.log("not filled out dropdowns");
    }
  };

  let dynamicContent = (docContext) => {
    if (
      docContext["course"] !== "" &&
      docContext["weekday"] !== "" &&
      docContext["timeslot"] !== ""
    ) {
      return "contained";
    } else {
      return "outlined";
    }
  };
  return (
    <Button
      variant={dynamicContent(docContext)}
      color="success"
      onClick={() => handleOnClick()}
    >
      <GolfCourseIcon />
    </Button>
  );
}
