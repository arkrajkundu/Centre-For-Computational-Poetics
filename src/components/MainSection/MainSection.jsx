/* eslint-disable no-unused-vars */
import React from 'react'
import './MainSection.css'
import MainCard from '../MainCard/MainCard'
import LeftRectangle from '../LeftRectangle/LeftRectangle'
import RightRectangle from '../RightRectangle/RightRectangle'

const MainSection = () => {

  return (
    <div className='pooragadbadstructuretha'>
      <div>
        <LeftRectangle />
      </div>
      <div className='column'>
        <div class="row1">
          <div className="box r1">
            {/* <img src={assets.rdl} /> */}
            <div class="glass-overlay g1">

            </div>
            <div class="card-inner">
              <div class="card-front">
                <div class="card-content">
                  <MainCard text={"   RESOURCE     DEVLOPMENT \n            LAB "} />
                </div>
              </div>
              <div class="card-back"></div>
            </div>
          </div>

          <div className="box r2">
            <div class="glass-overlay g2"></div>
            <div class="card-inner">
              <div class="card-front">
                <div class="card-content">
                  <MainCard text={"      SPEECH  PROCESSING \n          LAB"} />
                </div>
              </div>
              <div class="card-back"></div>
            </div>
          </div>

          {/* <div className="box"><MainCard text={"Dictionaries"}/></div>
        </div> */}
        </div>
        <div class="row2">

          <div className="box r3">

            <div class="glass-overlay g3">

            </div>
            <div class="card-inner">
              {/* <img src={assets.rdl} alt="" /> */}
              <div class="card-front">
                {/*  <img src={assets.rdl} alt="" /> */}
                <div class="card-content">
                  <MainCard text={"    HERITAGE      COMPUTING \n         LAB"} />
                  {/* <img src={assets.rdl} alt="" /> */}
                </div>
              </div>
              <div class="card-back"></div>
            </div>
          </div>

          <div className="box r4">
            <div class="glass-overlay g4"></div>
            <div class="card-inner">
              <div class="card-front">
                <div class="card-content">
                  <MainCard text={"        POETIC  THERAPEUTICS \n            LAB "} />
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
        <RightRectangle />
      </div>

    </div>

  )
}

export default MainSection


