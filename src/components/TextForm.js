import React, { useState } from 'react'




export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("Click On Change")
    setText(event.target.value);
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
  }
  const handleCopyClick = () => {
    let newText = document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value)

  }
  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview Text</h2>
        <p>{text.length>0?text:"Enter something......."}</p>
      </div>
    </>

  )
}

