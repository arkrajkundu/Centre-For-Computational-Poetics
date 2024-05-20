import React from 'react'
import { useState, useEffect } from 'react'
import './OptionManager.css'
import Text2MatraGUI from '../Text2MatraGUI/Text2MatraGUI'
import RMaGenGUI from '../RMaGenGUI/RMaGenGUI'
import FVRCal from '../FVRCal/FVRCal'
import FVFoSCal from '../FVFoSCal/FVFoSCal'
import { assets } from '../../assets/assets'

function OptionManager(props) {
    const [optionsArr, setOptionsArr] = useState([])
    const [result, setResult] = useState([])
    const [selected, change] = useState(optionsArr[0]);
    const [searchInput, setSearchInput] = useState("");
    const [Tree, changeTree] = useState([]);
    const [contentAvail, setContent] = useState("");

    function getNewTreePush(Tree, data) {
        let newTree = [];
        for (let i = 0; i < Tree.length; i++) {
            newTree.push(Tree[i]);
        }
        newTree.push(data);
        return newTree;
    }
    function getNewTreePop(Tree) {
        let newTree = [];
        if (Tree.length > 1) {
            for (let i = 0; i < Tree.length - 1; i++) {
                newTree.push(Tree[i]);
            }
        }
        else if (Tree.length == 1) {
            newTree.push(Tree[0]);
        }
        return newTree;
    }
    // to get initial data from backend
    async function getInitialData() {

        let a = await fetch(`http://localhost:5000/RDL?arr=&filter=`)
        let initialoptions = await a.json();
        change(initialoptions[0]);
        changeTree(getNewTreePush(Tree, initialoptions[0]));
        console.log("tree initialised")
        setOptionsArr(initialoptions);

    }
    // to get data with search filter
    async function getDataWithFilter(filter, Tree) {
        console.log(Tree);
        if (Tree.length >= 1) {

            let apilink = "http://localhost:5000/RDL?arr="
            for (let i = 0; i < Tree.length; i++) {
                if (i == 0) {
                    apilink += Tree[i];
                }
                else {
                    apilink += "," + Tree[i];
                }
            }
            apilink += "&filter=";
            apilink += filter;
            console.log(apilink);

            try {
                let resultjson = await fetch(apilink);
                let result = await resultjson.json();
                setContent("");
                setResult(result);
            }
            catch (err) {
                let resultjson = await fetch(apilink);
                let content = await resultjson.text();
                console.log(content);
                setContent(content);

                setResult([]);

            }


        }

    }

    // the hook run when the page loads first time
    useEffect(() => {
        getInitialData();
    }, []);

    // the hook runs when Tree structure is changed or search input is changed
    useEffect(() => {
        console.log("tree changed")
        if (Tree[0] == "Tools" && Tree.length > 1) {
            //no request
        }
        else getDataWithFilter(searchInput, Tree);
    }, [searchInput, Tree]);

    // main options options click handler
    const optionClickHandler = (e) => {
        let dataIndex = e.target.getAttribute('data-index')
        Tree.length = 0;
        changeTree(getNewTreePush(Tree, dataIndex));

        setResult([]);
        change(dataIndex)

    }
    const inputChangeHandler = (e) => {
        setSearchInput(e.target.value);
    }
    const crossClickHandler = (e) => {
        setSearchInput("");
    }
    const backButtonClickHandler = (e) => {

        changeTree(getNewTreePop(Tree));
        console.log(Tree);
    }
    const itemClickHandler = (e) => {
        //  changeTree(Tree.push("asda"));
        let data = e.target.getAttribute('data-index');
        changeTree(getNewTreePush(Tree, data));
    }

    return (





        <div id='content-box' style={{ height: props.h, width: props.w }}>

            <div id='search-back' style={{ backgroundColor: props.bc }}>
                <button onClick={backButtonClickHandler} id='back-button'>
                    <img style={{ height: "100%" }} src={assets.backButton} />
                </button>

                <div id='option-selector' style={{ backgroundColor: props.bc }}>
                    {optionsArr.map((optionsArr) => {
                        if (optionsArr == selected) {
                            return <button className="option-items-button" data-index={optionsArr} onClick={optionClickHandler} style={{ backgroundColor: "black", border: "none", color: "white" }} key={optionsArr}>{optionsArr}</button>
                        }
                        else {
                            return <button className="option-items-button" data-index={optionsArr} onClick={optionClickHandler} key={optionsArr}>{optionsArr}</button>
                        }

                    })}
                </div>

                <div id='search-box'>
                    <input placeholder='search' id='search' onChange={inputChangeHandler} value={searchInput}></input>
                    <button id='cross-button' onClick={crossClickHandler}>
                        <img src={assets.crossButton} style={{ width: "100%", height: "100%" }}></img>
                    </button>
                </div>
            </div>

            <div style={{ width: "100%", height: "90%", paddingLeft: "2%", paddingRight: "2%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {

                    (contentAvail.length == 0 && Tree[0] == "Dataset" || Tree[Tree.length - 1] == "Tools") &&
                    <div style={{ width: "100%", height: "100%" }}>
                        <div id='curr-prev'><img src={assets.prevButton} style={{ height: "100%" }}></img>{Tree[Tree.length - 1]}</div>
                        <div id={Tree[0].toLowerCase()}>

                            {

                                result.map((result) => {
                                    {
                                        return <button className="result-item" key={result} data-index={result} onClick={itemClickHandler} data-lang="hi">{result}</button>
                                    }
                                })
                            }
                            {contentAvail.length > 0 && <div style={{ height: "100%", width: "100%", whiteSpace: "pre-wrap", padding: "5%" }} id='content-result'>{contentAvail}</div>
                            }
                        </div>
                    </div>

                }


                {
                    !(Tree.includes("Tools")) && contentAvail.length > 0 && <div id='content'>
                        {
                            result.map((result) => {
                                {
                                    return <button className="result-item" key={result} data-index={result} onClick={itemClickHandler} data-lang="hi">{result}</button>
                                }
                            })
                        }
                        {contentAvail.length > 0 && <div style={{ height: "100%", width: "100%", whiteSpace: "pre-wrap", padding: "5%" }} id='content-result'>{contentAvail}</div>}
                    </div>
                }
                {
                    Tree.includes("Tools") && Tree[Tree.length - 1] == "Text2Matra" && <Text2MatraGUI h="100%" w="100%" mc="#7dabf5" />
                }
                {
                    Tree.includes("Tools") && Tree[Tree.length - 1] == "RMaGen" && <RMaGenGUI h="100%" w="100%" mc="#2d8bbf" versionName="FVRCal" version="V1" />
                }
                {
                    Tree.includes("Tools") && Tree[Tree.length - 1] == "FVFoSCal" && <FVFoSCal h="100%" w="100%" mc="#add8e6" versionName="FVFoSCal" version="V1" />
                }
                {
                    Tree.includes("Tools") && Tree[Tree.length - 1] == "FVRCal" && <FVRCal h="100%" w="100%" mc="#2d8bbf" versionName="FVRCal" version="V1" />
                }
                {
                    Tree[0] == "Dictionary" &&
                    <div style={{ width: "100%", height: "100%" }}>
                        <div id='curr-prev'><img src={assets.prevButton} style={{ height: "100%" }}></img>{Tree[Tree.length - 1]}</div>
                        <div id='dictionary'>
                            <button>Pronounciation Dictionary [AWADHI]</button>
                            <button>Pronounciation Dictionary [BRAJ BHASHA]</button>
                            <button>Pronounciation Dictionary [HINDI]</button>
                        </div>
                    </div>
                }
            </div>


        </div>


    )
}

export default OptionManager
