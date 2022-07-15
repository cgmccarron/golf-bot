import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useDocContext, useDocUpdateContext } from "./DocProvider";
import { Timestamp } from "firebase/firestore";

export default function AddTeeTime() {
  const docContext = useDocContext();
  const toggleContext = useDocUpdateContext();
  const handleOnClick = async () => {
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
      await toggleContext({
        course: "",
        weekday: "",
        timeslot: "",
        when_requested: null,
      });
    } else {
      console.log("not filled out dropdowns");
    }
  };
  return (
    <div className="btn_container">
      <button onClick={() => handleOnClick()}>Add</button>
    </div>
  );
}
