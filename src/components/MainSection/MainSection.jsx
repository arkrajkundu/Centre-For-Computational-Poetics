/* eslint-disable no-unused-vars */
import React from 'react'
import './MainSection.css'
import MainRectangle from '../MainRectangle/MainRectangle'
import MainCard from '../MainCard/MainCard'

const MainSection = () => {
  return (
    <div className='main'>
      <MainRectangle text={"Test 1"}/>
      <MainCard text={"Resource Development Lab"}/>
      <MainCard/>
      <MainCard/>
      <MainCard/>
      <MainRectangle text={"Test 2"}/>
    </div>
  )
}

export default MainSection
