import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You have Click on the button." + text)
    setText(text.toUpperCase())
  }
  const handleLoClick = () => {
    // console.log("You have Click on the button." + text)
    setText(text.toLowerCase())
  }
  const handleOnChange = (event) => {
    // console.log("The Change has been Made.")
    setText(event.target.value)
  }
  const handleClearClick = (event) => {
    // console.log("The Change has been Made.")
    setText("")
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text);
  }

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className='container p-3' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className='mb-3' >
          <textarea className='form-control border' value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === "dark" ? "transparent" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>
      </div >
      <div className='container my-3 p-3' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters in the text</p>
        <p>{0.008 * text.split(" ").length} minutes to read this word.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter the text to Preview here."}</p>
      </div>
    </>

  )
}


