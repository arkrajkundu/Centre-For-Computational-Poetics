/* eslint-disable no-unused-vars */

import React from 'react'
import './StudentsTeam.css'
import StudentsBodyBatch from '../../components/StudentsBodyBatch/StudentsBodyBatch'
import StudentsBodyTitle from '../../components/StudentsBodyTitle/StudentsBodyTitle'
import StudentsCard from '../../components/StudentsCard/StudentsCard'
import { assets } from '../../assets/assets'

const StudentsTeam = () => {
  return (
    <div>
      <StudentsBodyTitle />
      <StudentsBodyBatch batch="2022 - 23" />
      <StudentsCard img={assets.aman} name="Aman Choudhary" branch="Computer Science Engg" batch="2022-26" />
      <StudentsCard img={assets.ark} name="Arkraj Kundu" branch="Computer Science Engg" batch="2022-26" />
      <StudentsCard img={assets.srivastava} name="Aditya Srivastava" branch="Computer Science Engg" batch="2022-26" />
      <StudentsCard img={assets.shresth} name="Shresth Bhattacharjee" branch="Computer Science Engg" batch="2022-26" />
      <StudentsCard img={assets.vishal} name="Vishal Deora" branch="Computer Science Engg" batch="2022-26" />
    </div>
  )
}

export default StudentsTeam
