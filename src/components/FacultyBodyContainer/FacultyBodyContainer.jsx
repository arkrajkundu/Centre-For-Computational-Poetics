import React from 'react'
import { assets } from '../../assets/assets'
import FacultyBodyTitle from '../FacultyBodyTitle/FacultyBodyTitle'
import FacultyCard from '../FacultyCard/FacultyCard'

function FacultyBodyContainer() {
  return (
    <div>
      <FacultyBodyTitle/>
      <div className="row">
        <FacultyCard img={assets.nks} name="Dr. Niraj Kumar Singh" title="Project Head - Centre for Computational Poetics" designation="Assistant Professor" branch="Computer Science and Engineering" email="mailto:nksingh@bitmesra.ac.in" />
        <FacultyCard img={assets.itu} name="Dr. Itu Snigdh" title="Co Project Head - Centre for Computational Poetics" designation="Assistant Professor" branch="Computer Science and Engineering" email="mailto:itusnigdh@bitmesra.ac.in" />
      </div>
      <div className="row">
        <FacultyCard img={assets.komal} name="Ms. Komal Naaz" title="Investigator (External Member)" designation="Assistant Professor" branch={"School of Computer Engineering, \n Kalinga Institute of Industrial Technology, Bhubasneshwar"} email="mailto:komalnaaz1209@gmail.com" />

      </div>
      
    </div>
  )
}

export default FacultyBodyContainer
