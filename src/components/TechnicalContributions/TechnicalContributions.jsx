import React from 'react'
import './TechnicalContributions.css'
import Contributions from '../Contributions/Contributions'

const TechnicalContributions = () => {
  return (
    <div className='technical-contributions'>
      <hr />
      <h2>Technical Contributions</h2>
      <Contributions tool={"Website (Development & Maintenance)"} contributor={"Aditya Srivastava [BTECH/10195/22], Aman Choudhary [BTECH/10269/22], Arkraj Kundu [BTECH/10232/22], Shresth Bhattacharjee [BTECH/10246/22], Vishal Deora [BTECH/10263/22]"} />
      <Contributions tool={"Logo Design"} contributor={"Abhyuday Pandey [BTECH/10174/22], Aditi [MBA/10067/22]"} />
      <Contributions tool={"Text2Mātrā"} contributor={"Komal Naaz, Niraj Kumar Singh"} />
      <Contributions tool={"RPaGen"} contributor={"Komal Naaz, Niraj Kumar Singh"} />
      <Contributions tool={"RMaGen"} contributor={"Komal Naaz, Niraj Kumar Singh"} />
      <Contributions tool={"FoSCal"} contributor={"Komal Naaz, Niraj Kumar Singh"} />
      <Contributions tool={"FVRCal"} contributor={"Komal Naaz, Niraj Kumar Singh"} />
      <Contributions tool={"FVFoSCal"} contributor={"Komal Naaz, Niraj Kumar Singh"} />
    </div>
  )
}

export default TechnicalContributions
