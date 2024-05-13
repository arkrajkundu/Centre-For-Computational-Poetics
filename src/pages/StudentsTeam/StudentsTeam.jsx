/* eslint-disable no-unused-vars */

import React from 'react'
import './StudentsTeam.css'
import StudentsBodyBatch from '../../components/StudentsBodyBatch/StudentsBodyBatch'
import StudentsBodyTitle from '../../components/StudentsBodyTitle/StudentsBodyTitle'
import StudentsCard from '../../components/StudentsCard/StudentsCard'
import { assets } from '../../assets/assets'
import StudentBodyContainer from '../../components/StudentBodyContainer/StudentBodyContainer'

const StudentsTeam = () => {
  return (
    <div className='stud-team'>
      <StudentBodyContainer />
    </div>
  )
}

export default StudentsTeam
