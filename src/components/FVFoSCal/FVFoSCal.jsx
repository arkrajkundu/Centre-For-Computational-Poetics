import React from 'react'
import { useState } from 'react'
import './FVFoSCal.css'
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
function FVFoSCal(props) {
  const [inputText, changeInput] = useState("");
  const [checkaScore, setCheckaScore] = useState(0);
  const [purnavritti, setPurnavritti] = useState(0);
  const [rhymeScore, setRhymeScore] = useState(0);
  const [shrutyaScore, setShrutyaScore] = useState(0);
  const [vipsa, setVipsa] = useState(0);
  const [vrityaScore, setVrityaScore] = useState(0);
  const [yamaSum, setYamaSum] = useState(0);
  const [checkaScoreColor, setCheckaScoreColor] = useState("red");
  const [rhymeScoreColor, setRhymeScoreColor] = useState("red");
  const [shrutyaScoreColor, setShrutyaScoreColor] = useState("red");
  const [vrityaScoreColor, setVrityaScoreColor] = useState("red");

  const instruction1 = "1. Enter your doha in the input field.";
  const eg1 = "अंग अंग छवि की लपट, उपटति जाति अछेह";
  const instruction2 = "2. Click on Submit Button"
  const instruction3 = "3. Receive Desired Output"
  const eg3 = "[[2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1], 24]";


  function getColor(value) {
    //value from 0 to 1
    var hue = ((value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
  }
  async function getOutput(input) {

    let a = await fetch("http://localhost:5000/Tools?name=FVFoSCal", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: input
    });
    let b = await a.json();
    console.log(b)
    setCheckaScore(b["checkaScore"]);
    setPurnavritti(b["purnavritti"]);
    setRhymeScore(b["rhymeScore"]);
    setShrutyaScore(b["shrutyaScore"]);
    setVipsa(b["vipsa"]);
    setVrityaScore(b["vrityaScore"]);
    setYamaSum(b["yamakSum"]);
    setCheckaScoreColor(getColor(b["checkaScore"]));
    setRhymeScoreColor(getColor(b["rhymeScore"]));
    setShrutyaScoreColor(getColor(b["shrutyaScore"]));
    setVrityaScoreColor(getColor(b["vrityaScore"]));

  }
  const inputChangeHandler = (e) => {
    changeInput(e.target.value);
  }
  const submitButtonHandler = (e) => {
    getOutput(inputText);
  }
  const clearHandler = (e) => {
    changeInput("");

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
            Checka Score % :
            <CircularProgressBar size="50" sw="7" progress={Math.ceil(checkaScore * 100)} color={checkaScoreColor} />
          </div>

          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Rhyme Score % :
            <CircularProgressBar size="50" sw="7" progress={Math.ceil(rhymeScore * 100)} color={rhymeScoreColor} />
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Shrutya Score % :
            <CircularProgressBar size="50" sw="7" progress={Math.ceil(shrutyaScore * 100)} color={shrutyaScoreColor} />
          </div>

          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Vritya Score % :
            <CircularProgressBar size="50" sw="7" progress={Math.ceil(vrityaScore * 100)} color={vrityaScoreColor} />
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Vipsa :
            <div style={{ width: "fit-content", marginRight: "10%" }}>{vipsa}</div>
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Yama Sum:
            <div style={{ width: "fit-content", marginRight: "10%" }}>{yamaSum}</div>
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Purnavritti :
            <div style={{ width: "fit-content", marginRight: "10%" }}>{purnavritti}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FVFoSCal