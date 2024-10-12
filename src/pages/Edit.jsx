import { useState, createRef } from "react";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Text from "../components/Text";
import {exportComponentAsJPEG} from "react-component-export-image"

import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const [paramas] = useSearchParams();

  const addTextFun = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div >
        <div ref={memeRef} style={{width:"700px", border:"1px solid black"}}>
          <img
            src={paramas.get("url")}
            alt="meme-img"
            style={{
              width: "300px",
              margin: "20px",
              boxShadow: "2px 2px 10px #000",
            }}
          />
          {Array(count)
            .fill(0)
            .map((e) => (
              <Text />
            ))}
        </div>
        <Button style={{ marginLeft: "20px" }} onClick={addTextFun}>
          Add Text
        </Button>
        <Button style={{ marginLeft: "20px" }} onClick={e => exportComponentAsJPEG(memeRef)}>
          Save
        </Button>
      </div>
    </>
  );
};

export default Edit;
