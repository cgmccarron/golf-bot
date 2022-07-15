import React, { createContext, useContext, useState } from "react";

const DocContext = createContext();
const DocUpdateContext = createContext();

export function useDocContext() {
  return useContext(DocContext);
}

export function useDocUpdateContext() {
  return useContext(DocUpdateContext);
}

export function DocProvider({ children }) {
  const [docObject, setDocObject] = useState({
    course: "",
    weekday: "",
    timeslot: "",
    when_requested: null,
  });

  function updateDoc(_prevDoc, _docValue, _value) {
    setDocObject((_prevDoc) => ({
      ..._prevDoc,
      ...{ [_docValue]: _value },
    }));
  }

  return (
    <DocContext.Provider value={docObject}>
      <DocUpdateContext.Provider value={updateDoc}>
        {children}
      </DocUpdateContext.Provider>
    </DocContext.Provider>
  );
}
