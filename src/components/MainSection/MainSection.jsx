/* eslint-disable no-unused-vars */
import React from 'react'
import './MainSection.css'
import MainRectangle from '../MainRectangle/MainRectangle'
import MainCard from '../MainCard/MainCard'

const MainSection = () => {
  return (
    <div className='pooragadbadstructuretha'>
      <div>
        { <MainRectangle text={"Computational Lab, developed by BIT Mesra Computer Science Department. Computational Lab, developed by BIT Mesra Computer Science Department. Computational Lab, developed by BIT Mesra Computer Science Department.  Floating News and others will be displayed here!"}/>}
      </div>
      <div className='column'>
        <div class="row1">
          <div className="box"><MainCard text={"Resource Development Lab"}/></div>
          <div className="box"><MainCard text={"Dictionaries"}/></div>
        </div>
        <div class="row2">
          <div className="box"><MainCard text={"Tools and Documentations"}/></div>
          <div className="box"><MainCard text={"Others.."}/></div>
        </div>
      </div>
      <div>
        { <MainRectangle text={"Here other things will be displayed.."}/>}
      </div>
    
    </div>
    
  )
}

export default MainSection


