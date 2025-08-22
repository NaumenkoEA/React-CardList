import React, { useState } from "react";
import "./InputForm.css"; 

const InputForm = ({ addCard }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="input-form">
      <input
        className="input-form input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="input-form button"
        onClick={() => {
          addCard(title);
          setTitle("");
        }}
      >
        Add Card
      </button>
    </div>
  );
};

export default InputForm;
