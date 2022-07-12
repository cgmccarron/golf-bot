import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTeeTime() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title != "") {
      await addDoc(collection(db, "title"), {
        title,
        complted: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="what tee time"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}
