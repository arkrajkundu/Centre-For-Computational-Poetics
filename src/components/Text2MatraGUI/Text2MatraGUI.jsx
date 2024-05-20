import React from 'react'
import { useState } from 'react'
import './Text2MatraGUI.css'
import Keyboard from '../Keyboard/Keyboard';
function Text2MatraGUI(props) {
  const [inputText, changeInput] = useState("");
  const [cursorPos, setCursorPos] = useState(0);
  const [height, setHeight] = useState("0px");      //transition on height
  const [outputText, changeOutput] = useState("Output");

  const instruction1 = "1. Enter your doha in the input field.";
  const eg1 = "अंग अंग छवि की लपट, उपटति जाति अछेह";
  const instruction2 = "2. Click on Submit Button"
  const instruction3 = "3. Receive Desired Output"
  const eg3 = "[[2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1], 24]";


  // keyboard management hook and function
  const [shift, toggle] = useState(false);
  const getKeyboardInput = (data) => {
    let char = "";
    if (data == "shift") {
      toggle(!shift);
    }
    else if (data == "delete" && cursorPos >= 1) {
      let newText = "";
      for (let i = 0; i < inputText.length; i++) {
        if (i == cursorPos - 1) continue;
        newText += inputText[i];
      }
      setCursorPos(cursorPos - 1);
      changeInput(newText);
    }
    else if (data == "Enter") {
      setCursorPos(cursorPos + 1);
      changeInput(inputText + '\n');
    }
    else if (data == "spacebar") {
      setCursorPos(cursorPos + 1);
      changeInput(inputText + ' ');

    }
    else if (data != "delete") {

      let pair = data.split(" ");
      if (shift) {
        char = pair[1];
        toggle(!shift);
      }
      else char = pair[0];

      let newText = inputText.slice(0, cursorPos) + char + inputText.slice(cursorPos);
      changeInput(newText);
      setCursorPos(cursorPos + 1);
    }


  }
  // fuction containing api call to fetch output for the particular tool
  async function getOutput(input) {

    let a = await fetch("http://localhost:5000/Tools?name=Text2Matra", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: input
    });
    let b = await a.text();

    changeOutput(b);

  }
  // Botton click event handler to get Keyboard
  const getKeyboard = (e) => {

    if (height == "300px") setHeight("0px");
    else setHeight("300px");
  }
  // Input field change handler
  const inputChangeHandler = (e) => {
    setCursorPos(e.target.selectionStart);
    changeInput(e.target.value);
  }
  //submit Button click handler
  const submitButtonHandler = (e) => {
    getOutput(inputText);
  }
  // clear button click handler
  const clearHandler = (e) => {
    changeInput("");
    changeOutput("");
  }
  // cursor position tracking for keyboard
  const getCursor = (e) => {
    setCursorPos(e.target.selectionStart);

  }
  return (
    <div style={{ height: props.h, width: props.w }} id='text2matra-body'>
      <div id='text2matra-header'>Text2Matra <sub> V1</sub></div>
      <div id='txt2matra-about-instructions'>
        <div id='about-text2matra'>
          text about the tool
        </div>
        <div id='instruction-items-container'>
          <div className='txt2matra-instruction-items'>{instruction1}<div className='text2matra-example-box'>{eg1}</div></div>
          <div className='txt2matra-instruction-items'>{instruction2}<div style={{ backgroundColor: "white", width: "50%", height: "20%", border: "1px  solid black", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px" }}>submit</div></div>
          <div className='txt2matra-instruction-items'>{instruction3}<div className='text2matra-example-box'>{eg3}</div>
          </div>
        </div>
      </div>
      <div id='txt2matra-working-area' style={{ backgroundColor: props.mc }}>
        <textarea placeholder="enter input" id='txt2matra-input' onChange={inputChangeHandler} value={inputText} onClick={getCursor}></textarea>
        <button className='buttons' onClick={clearHandler}>clear</button>
        <button className='buttons' onClick={submitButtonHandler}>submit</button>
        <button className='buttons' onClick={getKeyboard}>keyboard</button>
        <div id='txt2matra-output'>{outputText}</div>
      </div>
      <div id='keyboard-animation' style={{ height: height }}>
        <Keyboard setData={getKeyboardInput} shiftkey={shift} />
      </div>
      <div id='overflow-cover'></div>
    </div>
  )
}

export default Text2MatraGUI
