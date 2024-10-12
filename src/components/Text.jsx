import React, { useState} from "react";

import Draggable from "react-draggable";
const Text = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  return (
    <Draggable>
      {isEditable ? (
        <input  style={{ marginLeft: "20px" }}
          onDoubleClick={(e) => setIsEditable(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h2
          style={{ marginLeft: "20px" }}
          onDoubleClick={(e) => setIsEditable(true)}
        >
          {val}
        </h2>
      )}
    </Draggable>
  );
};

export default Text;
