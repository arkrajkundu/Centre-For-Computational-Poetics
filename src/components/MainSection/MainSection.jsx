/* eslint-disable no-unused-vars */
import React from 'react'
import './MainSection.css'
import MainCard from '../MainCard/MainCard'
import LeftRectangle from '../LeftRectangle/LeftRectangle'
import RightRectangle from '../RightRectangle/RightRectangle'
import { Link } from 'react-router-dom'

const MainSection = () => {

  return (
    <>
    <div className='pooragadbadstructuretha'>
      <div>
        <LeftRectangle />
      </div>
      <div className='column'>
        <div className="row1">
          <div className="box r1">
            <div className="glass-overlay g1">
            </div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-content">
                  <Link to='/home/RDL'><MainCard text={"   RESOURCE     DEVELOPMENT \n            LAB "} /></Link>
                </div>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
          <div className="box r2">
            <div className="glass-overlay g2"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-content">
                  <MainCard text={"      SPEECH  PROCESSING \n          LAB"} />
                </div>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
          {/* <div className="box"><MainCard text={"Dictionaries"}/></div>
        </div> */}
        </div>
        <div className="row2">
          <div className="box r3">
            <div className="glass-overlay g3">
            </div>
            <div className="card-inner">
              {/* <img src={assets.rdl} alt="" /> */}
              <div className="card-front">
                {/*  <img src={assets.rdl} alt="" /> */}
                <div className="card-content">
                  <MainCard text={"    HERITAGE      COMPUTING \n         LAB"} />
                  {/* <img src={assets.rdl} alt="" /> */}
                </div>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
          <div className="box r4">
            <div className="glass-overlay g4"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-content">
                  <MainCard text={"        POETRY  THERAPEUTICS \n            LAB "} />
                </div>
              </div>
              <div className="card-back"></div>
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
    <div className='mobile_cards'>
    <div className='column'>
        <div className="row1">
          <div className="box r1">
            <div className="glass-overlay g1">
            </div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-content">
                  <Link to='/home/RDL'><MainCard text={"   RESOURCE     DEVELOPMENT \n            LAB "} /></Link>
                </div>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
          <div className="box r2">
            <div className="glass-overlay g2"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-content">
                  <MainCard text={"      SPEECH  PROCESSING \n          LAB"} />
                </div>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
          {/* <div className="box"><MainCard text={"Dictionaries"}/></div>
        </div> */}
        </div>
        <div className="row2">
          <div className="box r3">
            <div className="glass-overlay g3">
            </div>
            <div className="card-inner">
              {/* <img src={assets.rdl} alt="" /> */}
              <div className="card-front">
                {/*  <img src={assets.rdl} alt="" /> */}
                <div className="card-content">
                  <MainCard text={"    HERITAGE      COMPUTING \n         LAB"} />
                  {/* <img src={assets.rdl} alt="" /> */}
                </div>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
          <div className="box r4">
            <div className="glass-overlay g4"></div>
            <div className="card-inner">
              <div className="card-front">
                <div className="card-content">
                  <MainCard text={"        POETRY  THERAPEUTICS \n            LAB "} />
                </div>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
          {/* <div className="box"><MainCard text={"Tools and Documentations"}/></div>
          <div className="box"><MainCard text={"Others.."}/></div> */}
        </div>
      </div>
    </div>
    <div className='mobile_left'>
      <ul className='left-rectangle'>
        <li className="left-rectangle-section">Centre for Computational Poetics was set up in the year 2024 at the Department of Computer Science and Engineering, Birla Institute of Technology Mesra.
        </li>
        <li className="left-rectangle-section">This is India's first computing-based research centre focused dedicatedly on the scientific study of the structure, form, and discourse of poems.
        </li>
        <li className="left-rectangle-section">We aim to use both traditional and cutting-edge technologies to highlight and utilize the inherent characteristics of poetry, thereby directly benefiting society in numerous ways.
        </li>
        <li className="left-rectangle-section">The four research labs, established under the umbrella of Centre for Computational Poetics, include: <span>Resource Development Lab, Speech Processing Lab, Heritage Computing Lab, and Poetry Therapeutics Lab</span>.</li>
      </ul >

    </div>
    <div className='mobile_right'>
      <div className='right-rectangle'>
        <h2>Our current focus</h2>
        <ul className='less-imp'>
          <li>Poetry for Child Development</li>
          <li>Poetry for Mental Health</li>
          <li>Apart from the <span>Khadi-Bhasha Hindi</span>, computational analysis of the poetic wealth of its dialects, such as <span>Awadhi</span> and <span>BrajBhasha</span>, is among our priorities.</li>
          <li>We aim to work for the <em>preservation, promotion,</em> and <em>propagation</em> of poetic wealth of the tribal and link languages of Jharkhand state.</li>
          <li>
            Development of well structured:
            <ol className='development-info'>
              <li>
                ✔ हिंदी महाकोश / Hindī Mahākośa.
              </li>
              <li>
                ✔ हिंदी तुकांत कोष / Hindī Tukānta Koṣa.
              </li>
            </ol>
          </li>
        </ul>
        <p className='hindi-mahakosh-desc'>The Hindī Mahākośa is much more than a standard dictionary for it has features which are crucial to literary stylistics, particularly for poetic compositions.</p>
        {/* <ul className='more-imp'>
          <li>Mega Hindi Dictionary</li>
        </ul> */}
        <div className='contribute'>
          <p>Wish to contribute? <Link to='/contact-us'><span>Join us!</span></Link></p>
        </div>
        {/* <img src={assets.wordCloud} alt="" /> */}
      </div>
        
    </div>
    </>
    
  )
}

export default MainSection