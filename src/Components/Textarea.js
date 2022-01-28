import React, { useState } from "react";

export default function Textarea(props) {
  const handleUpCase = () => {
    // console.log("clicked"+Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Upper case has been enabled","success");
  };
  const handleLoCase = () => {
    // console.log("clicked"+Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Lower case has been enabled","success");
  };
  const handleClear = () => {
    // console.log("clicked"+Text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text","success");
  };
  const handleText = (event) => {
    // console.log("message in Uppercase");
    setText(event.target.value);
  };
  const handleCopy=()=>{
    var text =document.getElementById("floatingTextarea2");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success");
  };
  const [Text, setText] = useState("");
  // Text="Newtext"; This is wrong way
  // setText("NewText");this is right way
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="form-floating">
          <h1>{props.Textarea}</h1>
          <textarea
            className="form-control"
            value={Text}
            onChange={handleText}
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "300px",backgroundColor: props.mode==='dark'?'#5c5151':'white' ,color: props.mode==='dark'?'white':'black'}}
            defaultValue={""}
          />
          <button
            disabled={Text.length===0}
            type="button"
            className="btn btn-primary mx-3 my-3"
            onClick={handleUpCase}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={Text.length===0}
            type="button"
            className="btn btn-primary mx-3 my-1"
            onClick={handleLoCase}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={Text.length===0}
            type="button"
            className="btn btn-danger mx-1 my-1"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            disabled={Text.length===0}
            type="button"
            className="btn btn-primary mx-3 my-1"
            onClick={handleCopy}
          >
          Copy Text
          </button>
        </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>About above paragraphs</h1>
        <p>
          No.of words {Text.split(/\s+/).filter((element)=>{return Text.length!==0}).length} and Character {Text.length}
        </p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return Text.length!==0}).length} Minute read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
