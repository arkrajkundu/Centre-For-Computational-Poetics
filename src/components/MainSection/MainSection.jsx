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
          <div className="box">
          <div class="glass-overlay"></div>
          <div class="card-inner">
          <div class="card-front">
          <div class="card-content">
            <MainCard text={"Resource Development Lab"}/>
            </div>
        </div>
        <div class="card-back"></div>
        </div>
         </div>

         <div className="box">
          <div class="glass-overlay"></div>
          <div class="card-inner">
          <div class="card-front">
          <div class="card-content">
            <MainCard text={"Dictionaries"}/>
            </div>
        </div>
        <div class="card-back"></div>
        </div>
         </div>

          {/* <div className="box"><MainCard text={"Dictionaries"}/></div>
        </div> */}
        </div>
        <div class="row2">

        <div className="box">
          <div class="glass-overlay"></div>
          <div class="card-inner">
          <div class="card-front">
          <div class="card-content">
            <MainCard text={"Tools and Documentations"}/>
            </div>
        </div>
        <div class="card-back"></div>
        </div>
         </div>

         <div className="box">
          <div class="glass-overlay"></div>
          <div class="card-inner">
          <div class="card-front">
          <div class="card-content">
            <MainCard text={"Others.."}/>
            </div>
        </div>
        <div class="card-back"></div>
        </div>
         </div>



          {/* <div className="box"><MainCard text={"Tools and Documentations"}/></div>
          <div className="box"><MainCard text={"Others.."}/></div> */}
        </div>
      </div>
      <div>
        { <MainRectangle text={"Here other things will be displayed.."}/>}
      </div>
    
    </div>
    
  )
}

export default MainSection


