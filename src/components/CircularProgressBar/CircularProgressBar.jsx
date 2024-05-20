import React from 'react'
import { useState } from 'react'
import './CircularProgressBar.css'  
function CircularProgressBar(props) {
  
  return (
    <div id='bar'>
      <svg width={props.size} height={props.size} style={{"--size":props.size,"--stroke-width":props.sw,"--progress":props.progress}}className="circular-progress">
          
          <circle className="bg" cx={(props.size)/2} cy={(props.size)/2} r={(props.size - props.sw)/2}></circle>  
          <circle className="fg" cx={(props.size)/2} cy={(props.size)/2} r={(props.size - props.sw)/2} style={{stroke:props.color}}></circle>
        </svg><b id='percent'>{props.progress}</b>
    </div>
  )
}

export default CircularProgressBar
