import React from 'react'
import './Keyboard.css'

function Keyboard(props) {
    const keyPressHandler = (e) => {
        let val = e.target.getAttribute("value");
        props.setData(val);
    }
    return (
        <div className="virtual-keyboard">
            <div className="row">
                <button className='key' value={"ॊ ऒ"} onClick={keyPressHandler}>{"ॊ ऒ"}</button>
                <button className='key' value={"१ ऍ"} onClick={keyPressHandler}>{"१ ऍ"}</button>
                <button className='key' value={"२  ॅ"} onClick={keyPressHandler}>{"२  ॅ"}</button>
                <button className='key' value={"३  ्र"} onClick={keyPressHandler}>{"३  ्र"}</button>
                <button className='key' value={"४ र्"} onClick={keyPressHandler}>{"४ र्"}</button>
                <button className='key' value={"५ ज्ञ"} onClick={keyPressHandler}>{"५ ज्ञ"}</button>
                <button className='key' value={"६ त्र"} onClick={keyPressHandler}>{"६ त्र"}</button>
                <button className='key' value={"७ क्ष"} onClick={keyPressHandler}>{"७ क्ष"}</button>
                <button className='key' value={"८ श्र"} onClick={keyPressHandler}>{"८ श्र"}</button>
                <button className='key' value={"९ ("} onClick={keyPressHandler}>{"९ ("}</button>
                <button className='key' value={"० )"} onClick={keyPressHandler}>{"० )"}</button>
                <button className='key' value={"- ः"} onClick={keyPressHandler}>{"- ः"}</button>
                <button className='key' value={"ृ ऋ"} onClick={keyPressHandler}>{"ृ ऋ"}</button>

                <button value="delete" className="delete" onClick={keyPressHandler} >delete</button>
            </div>
            <div className="row">
                <button value="Tab" className="delete" >Tab</button>
                <button className='key' value={"ौ औ"} onClick={keyPressHandler}>{"ौ औ"}</button>
                <button className='key' value={"ै ऐ"} onClick={keyPressHandler}>{"ै ऐ"}</button>
                <button className='key' value={"ा आ"} onClick={keyPressHandler}>{"ा आ"}</button>
                <button className='key' value={"ी ई"} onClick={keyPressHandler}>{"ी ई"}</button>
                <button className='key' value={"ू ऊ"} onClick={keyPressHandler}>{"ू ऊ"}</button>
                <button className='key' value={"ब भ"} onClick={keyPressHandler}>{"ब भ"}</button>
                <button className='key' value={"ह ङ"} onClick={keyPressHandler}>{"ह ङ"}</button>
                <button className='key' value={"ग घ"} onClick={keyPressHandler}>{"ग घ"}</button>
                <button className='key' value={"द ध"} onClick={keyPressHandler}>{"द ध"}</button>
                <button className='key' value={"ज झ"} onClick={keyPressHandler}>{"ज झ"}</button>
                <button className='key' value={"ड ढ"} onClick={keyPressHandler}>{"ड ढ"}</button>
                <button className='key' value={"़ ञ"} onClick={keyPressHandler}>{"़ ञ"}</button>
                <button className='key' value={"ॉ ऑ"} onClick={keyPressHandler}>{"ॉ ऑ"}</button>
            </div>
            <div className="row">
                <button value="Capslock" className="delete">CapsLock</button>
                <button className='key' value={"ो ओ"} onClick={keyPressHandler}>{"ो ओ"}</button>
                <button className='key' value={"े ए"} onClick={keyPressHandler}>{"े ए"}</button>
                <button className='key' value={"् अ"} onClick={keyPressHandler}>{"् अ"}</button>
                <button className='key' value={"ि इ"} onClick={keyPressHandler}>{"ि इ"}</button>
                <button className='key' value={"ु उ"} onClick={keyPressHandler}>{"ु उ"}</button>
                <button className='key' value={"प फ"} onClick={keyPressHandler}>{"प फ"}</button>
                <button className='key' value={"र ऱ"} onClick={keyPressHandler}>{"र ऱ"}</button>
                <button className='key' value={"क ख"} onClick={keyPressHandler}>{"क ख"}</button>
                <button className='key' value={"त थ"} onClick={keyPressHandler}>{"त थ"}</button>
                <button className='key' value={"च छ"} onClick={keyPressHandler}>{"च छ"}</button>
                <button className='key' value={"ट ठ"} onClick={keyPressHandler}>{"ट ठ"}</button>
                <button value="Enter" className="delete" onClick={keyPressHandler}>Enter</button>
            </div>
            <div className="row">
               {(props.shiftkey == false)?<button value="shift" className="shift" onClick={keyPressHandler}>shift</button>:<button value="shift" className="shift" onClick={keyPressHandler} style={{backgroundColor:"black",color:"white"}}>shift</button>}
                <button className='key' value={"ॆ ऎ"} onClick={keyPressHandler}>{"ॆ ऎ"}</button>
                <button className='key' value={"ं  ँ"} onClick={keyPressHandler}>{"ं  ँ"}</button>
                <button className='key' value={"म ण"} onClick={keyPressHandler}>{"म ण"}</button>
                <button className='key' value={"न ऩ"} onClick={keyPressHandler}>{"न ऩ"}</button>
                <button className='key' value={"व ऴ"} onClick={keyPressHandler}>{"व ऴ"}</button>
                <button className='key' value={"ल ळ"} onClick={keyPressHandler}>{"ल ळ"}</button>
                <button className='key' value={"स श"} onClick={keyPressHandler}>{"स श"}</button>
                <button className='key' value={", ष"} onClick={keyPressHandler}>{", ष"}</button>
                <button className='key' value={". ।"} onClick={keyPressHandler}>{". ।"}</button>
                <button className='key' value={"य य़"} onClick={keyPressHandler}>{"य य़"}</button>
               
                <button value="shift" className="shift" onClick={keyPressHandler}>shift</button>
            </div>
            <div className="row-spacebar">
               <button className='spacebar' value="spacebar" onClick={keyPressHandler}></button>
            </div>
        </div>
    )
}

export default Keyboard