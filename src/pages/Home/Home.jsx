/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import './Home.css'
import MainSection from '../../components/MainSection/MainSection'
import Carousel from '../../components/Carousel/Carousel'
import { carouselData } from '../../assets/assets'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Carousel data={carouselData.slides} />
      <MainSection />
      <Footer />
    </div>
  )
}

export default Home
