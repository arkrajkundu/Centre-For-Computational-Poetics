import React from 'react'
import { useState } from 'react';
import './RMaGenGUI.css'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
function RMaGenGUI(props) {
  const [inputText, changeInput] = useState("");
  const [veerScore, changeVeerScore] = useState(0);
  const [shringarScore, changeShringarScore] = useState(0);
  const [hasyaScore, changeHasyaScore] = useState(0);
  const [bhaktiScore, changeBhaktiScore] = useState(0);
  const [veerScoreColor, changeVeerScoreColor] = useState("red");
  const [shringarScoreColor, changeShringarScoreColor] = useState("red");
  const [hasyaScoreColor, changeHasyaScoreColor] = useState("red");
  const [bhaktiScoreColor, changeBhaktiScoreColor] = useState("red");

  const instruction1 = "1. Enter your doha in the input field.";
  const eg1 = "अंग अंग छवि की लपट, उपटति जाति अछेह";
  const instruction2 = "2. Click on Submit Button"
  const instruction3 = "3. Receive Desired Output"
  const eg3 = "[[2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1], 24]";


  function getColor(value) {
    //value from 0 to 1
    var hue = ((value / 100) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
  }
  async function getOutput(input) {

    let a = await fetch("http://localhost:5000/Tools?name=RMaGen", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: input
    });
    let b = await a.json();
    console.log(b)
    changeBhaktiScore(b["Bhakti"]);
    changeHasyaScore(b["Hasya"]);
    changeShringarScore(b["Shringar"])
    changeVeerScore(b["Veer"])
    changeBhaktiScoreColor(getColor(b["Bhakti"]))
    changeHasyaScoreColor(getColor(b["Hasya"]));
    changeShringarScoreColor(getColor(b["Shringar"]));
    changeVeerScoreColor(getColor(b["Veer"]));
  }
  const inputChangeHandler = (e) => {
    changeInput(e.target.value);
  }
  const submitButtonHandler = (e) => {
    getOutput(inputText);
  }
  const clearHandler = (e) => {
    changeInput("");
    changeBhaktiScore(0);
    changeHasyaScore(0);
    changeShringarScore(0);
    changeVeerScore(0);
    changeBhaktiScoreColor("red");
    changeHasyaScoreColor("red");
    changeShringarScoreColor("red");
    changeVeerScoreColor("red");
  }
  return (
    <div style={{ height: props.h, width: props.w, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "2%" }}>
      <div style={{ height: "10%", width: "100%", display: "flex", alignItems: "center", paddingLeft: "5%", backgroundColor: props.mc, borderTopRightRadius: "8px", borderTopLeftRadius: "8px", fontSize: "medium", fontWeight: "bolder", fontFamily: "Briem Hand" }}>RMaGen<sub> V1</sub></div>
      <div id='about-instructions'>
        <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", color: "white" }}>
          text about the tool
        </div>
        <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          <div className='instruction-items'>{instruction1}<div style={{ width: "99%", height: "40%", border: "1px solid black", backgroundColor: "white", fontSize: "x-small", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "2%" }}>{eg1}</div></div>
          <div className='instruction-items'>{instruction2}<div style={{ backgroundColor: "white", width: "50%", height: "20%", border: "1px  solid black", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px" }}>submit</div></div>
          <div className='instruction-items'>
            {instruction3}<div style={{ width: "99%", height: "40%", border: "1px solid black", backgroundColor: "white", fontSize: "x-small", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "2%" }}>{eg3}</div>
          </div>
        </div>
      </div>
      <div id='working-area'>
        <textarea placeholder="enter input , Input lines should not exceed 300 lines" id='input' onChange={inputChangeHandler} value={inputText}></textarea>
        <button style={{ height: "6%", width: "7%", borderRadius: "5px" }} onClick={clearHandler}>clear</button>
        <button style={{ height: "6%", width: "7%", borderRadius: "5px" }} onClick={submitButtonHandler}>submit</button>
        <div id='output-scores'>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Veer Score % :
            <CircularProgressBar size="50" sw="7" progress={veerScore} color={veerScoreColor} />
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Shringar Score % :
            <CircularProgressBar size="50" sw="7" progress={shringarScore} color={shringarScoreColor} />
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Hasya Score % :
            <CircularProgressBar size="50" sw="7" progress={hasyaScore} color={hasyaScoreColor} />
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Bhakti Score % :
            <CircularProgressBar size="50" sw="7" progress={bhaktiScore} color={bhaktiScoreColor} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default RMaGenGUI