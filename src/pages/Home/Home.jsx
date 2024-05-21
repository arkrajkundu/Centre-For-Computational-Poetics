/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import './Home.css'
import MainSection from '../../components/MainSection/MainSection'
import Carousel from '../../components/Carousel/Carousel'
import { carouselData } from '../../assets/assets'
import Footer from '../../components/Footer/Footer'
import SecondSection from '../../components/SecondSection/SecondSection'
import Testimonials from '../../components/Testimonials/Testimonials'
import Disclaimer from '../../components/Disclaimer/Disclaimer'
import ThirdSection from '../../components/ThirdSection/ThirdSection'

const Home = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Carousel data={carouselData.slides} />
      <MainSection />
      <SecondSection />
      {/* <ThirdSection /> */}
      <Disclaimer />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
