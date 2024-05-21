/* eslint-disable no-unused-vars */

import React from 'react'
import './AboutUs.css'
import Testimonials from '../../components/Testimonials/Testimonials'
import Vision from '../../components/Vision/Vision'
import Mission from '../../components/Mission/Mission'
import TechnicalContributions from '../../components/TechnicalContributions/TechnicalContributions'

const AboutUs = () => {
  return (
    <div>
      <Vision />
      <Mission />
      <Testimonials />
      <TechnicalContributions />
    </div>
  )
}

export default AboutUs
