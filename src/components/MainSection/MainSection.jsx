/* eslint-disable no-unused-vars */
import React from 'react'
import './MainSection.css'
import MainRectangle from '../MainRectangle/MainRectangle'
import MainCard from '../MainCard/MainCard'
import { assets } from '../../assets/assets'

const MainSection = () => {

  return (
    <div className='pooragadbadstructuretha'>
      <div>
        <div>
          {<MainRectangle texttop={"Computational Lab, developed by BIT Mesra Computer Science Department. Computational Lab, developed by BIT Mesra Computer Science Department. Computational Lab, developed by BIT Mesra Computer Science Department.  Floating News and others will be displayed here!"}
          />}
        </div>
        <div>
        </div>
      </div>
      <div className='column'>
        <div class="row1">
          <div className="box">
            <div class="glass-overlay">
            </div>
            <div class="card-inner">
              <div class="card-front rdl">
                <div class="card-content">
                  <MainCard text={"Resource\nDevelopment\nLab"} />
                </div>
              </div>
              <div class="card-back"></div>
            </div>
          </div>

          <div className="box">
            <div class="glass-overlay"></div>
            <div class="card-inner">
              <div class="card-front spl">
                <div class="card-content">
                  <MainCard text={"Speech Processing Lab"} />
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
              <div class="card-front hcl">
                <div class="card-content">
                  <MainCard text={"Heritage Computing Lab"} />
                </div>
              </div>
              <div class="card-back"></div>
            </div>
          </div>

          <div className="box">
            <div class="glass-overlay"></div>
            <div class="card-inner">
              <div class="card-front ptl">
                <div class="card-content">
                  <MainCard text={"Poetry Therapeutics Lab"} />
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
        {<MainRectangle header={"Our current focus"} texttop={"• Poetry for Child Education\n• The Therapeutic Power of Poetry\n\n⚫ Mega Hindi Dictionary"} textbottom={"Wish to contribute?"} invitelink={"Join us!"} />}
      </div>

    </div>

  )
}

export default MainSection


