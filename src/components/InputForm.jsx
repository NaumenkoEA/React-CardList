import React, { useState } from "react";

const InputForm = ({ addCard }) => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
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
