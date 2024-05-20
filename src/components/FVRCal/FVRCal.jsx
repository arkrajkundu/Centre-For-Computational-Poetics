import React from 'react'
import { useState } from 'react'
import './FVRCal.css'
function FVRCal(props) {
    const [inputText, changeInput] = useState("");
    const [outputText, changeOutput] = useState("Output");
    const instruction1 = "1. Enter your doha in the input field.";
    const eg1 = "अंग अंग छवि की लपट, उपटति जाति अछेह";
    const instruction2 = "2. Click on Submit Button"
    const instruction3 = "3. Receive Desired Output"
    const eg3 = "[[2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1], 24]";
  
    async function getOutput(input) {
  
      let a = await fetch("http://localhost:5000/Tools?name=FVRCal", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: input
      });
      let b = await a.text();
  
      changeOutput(b);
  
    }
    const inputChangeHandler = (e) => {
      changeInput(e.target.value);
    }
    const submitButtonHandler = (e) => {
      getOutput(inputText);
    }
    const clearHandler = (e) => {
      changeInput("");
      changeOutput("");
    }
    return (
      <div style={{ height: props.h, width: props.w, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "2%" }}>
        <div style={{ height: "10%", width: "100%", display: "flex", alignItems: "center", paddingLeft: "5%", backgroundColor: props.mc, borderTopRightRadius: "8px", borderTopLeftRadius: "8px", fontSize: "medium", fontWeight: "bolder", fontFamily: "Briem Hand" }}>{props.versionName}<sub>{props.version}</sub></div>
        <div id='fvrcal-about-instructions'>
          <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", color: "white" }}>
            text about the tool
          </div>
          <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <div className='fvrcal-instruction-items'>{instruction1}<div style={{ width: "99%", height: "40%", border: "1px solid black", backgroundColor: "white", fontSize: "x-small", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "2%" }}>{eg1}</div></div>
            <div className='fvrcal-instruction-items'>{instruction2}<div style={{ backgroundColor: "white", width: "50%", height: "20%", border: "1px  solid black", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px" }}>submit</div></div>
            <div className='fvrcal-instruction-items'>
              {instruction3}<div style={{ width: "99%", height: "40%", border: "1px solid black", backgroundColor: "white", fontSize: "x-small", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "2%" }}>{eg3}</div>
            </div>
          </div>
        </div>
        <div id='fvrcal-working-area' style={{backgroundColor:props.mc}}>
          <textarea placeholder="enter input" id='input' onChange={inputChangeHandler} value={inputText}></textarea>
          <button style={{ height: "6%", width: "7%", borderRadius: "5px" }} onClick={clearHandler}>clear</button>
          <button style={{ height: "6%", width: "7%", borderRadius: "5px" }} onClick={submitButtonHandler}>submit</button>
          <div id='fvrcal-output'>{outputText}</div>
        </div>
      </div>
    )
}

export default FVRCal