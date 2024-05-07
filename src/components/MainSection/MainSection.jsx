/* eslint-disable no-unused-vars */
import React from 'react'
import './MainSection.css'
import MainRectangle from '../MainRectangle/MainRectangle'
import MainCard from '../MainCard/MainCard'

const MainSection = () => {
  return (
    <div className='column'>
     {/* { <MainRectangle text={"Test 1"}/>} */}
      
      { <MainRectangle text={"Test 1"}/>}
      <div class="row">
       <div className="box">
      <MainCard text={"Resource Development Lab"}/>
      </div>
      <div className="box"><MainCard/></div>
      <div className="box"><MainCard/></div>
      <div className="box"><MainCard/></div>
      
      
      </div>
      { <MainRectangle text={"Test 2"}/>}

      
    {/*  {  <MainRectangle text={"Test 2"}/> }  */}
    </div>
  )
}

export default MainSection


