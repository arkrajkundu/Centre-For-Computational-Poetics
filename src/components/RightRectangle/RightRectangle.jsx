import React from 'react'
import './RightRectangle.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const RightRectangle = () => {
  return (
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
  )
}

export default RightRectangle
