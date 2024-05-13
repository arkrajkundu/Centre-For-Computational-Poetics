import React from 'react'
import './StudentBodyContainer.css'
import StudentsBodyBatch from '../StudentsBodyBatch/StudentsBodyBatch'
import StudentsBodyTitle from '../StudentsBodyTitle/StudentsBodyTitle'
import StudentsCard from '../StudentsCard/StudentsCard'
import { assets } from '../../assets/assets'

const StudentBodyContainer = () => {
  return (
    <div className='student-body-container'>
      <StudentsBodyTitle />
      <StudentsBodyBatch batch="2022 - 23" />
      <div className='row'>
        <StudentsCard img={assets.raj} name="Raj Aryan" branch="Computer Science and Engineering" batch="2021-25" linkedin="https://www.linkedin.com/in/thatrajaryan/" github="https://github.com/rajaryan18" instagram="https://www.instagram.com/thatrajaryan/" email="mailto:btech10078.21@bitmesra.ac.in" />
        <StudentsCard img={assets.sumit} name="Sumit Agarwal" branch="Computer Science and Engineering" batch="2021-25" linkedin="https://www.linkedin.com/in/sumit-agarwal2002/" github="https://github.com/sumit2002agarwal" instagram="https://www.instagram.com/agarwal_obviously/" email="mailto:btech10067.21@bitmesra.ac.in" />
      </div>
      <div className='row'>
        <StudentsCard img={assets.srivastava} name="Aditya Srivastava" branch="Computer Science and Engineering" batch="2022-26" linkedin="https://www.linkedin.com/in/aditya-srivastava-12476524a/" github="https://github.com/Adi1816" instagram="https://www.instagram.com/adiedits_1816/" email="mailto:btech10195.22@bitmesra.ac.in" />
        <StudentsCard img={assets.aman} name="Aman Choudhary" branch="Computer Science and Engineering" batch="2022-26" linkedin="https://www.linkedin.com/in/aman-choudhary-500088203/" github="https://github.com/AmanBiTM" instagram="https://www.instagram.com/amanchoudhary718/" email="mailto:btech10269.22@bitmesra.ac.in" />
        <StudentsCard img={assets.ark} name="Arkraj Kundu" branch="Computer Science and Engineering" batch="2022-26" linkedin="https://linkedin.com/in/arkrajkundu/" github="https://github.com/arkrajkundu/" instagram="https://www.instagram.com/arkrajkundu/" email="mailto:btech10232.22@bitmesra.ac.in" />
      </div>
      <div className="row">
        <StudentsCard img={assets.shresth} name="Shresth Bhattacharjee" branch="Computer Science and Engineering" batch="2022-26" linkedin="#" github="#" instagram="https://www.instagram.com/shresthbhattacharjee/" email="mailto:btech10246.22@bitmesra.ac.in" />
        <StudentsCard img={assets.vishal} name="Vishal Deora" branch="Computer Science and Engineering" batch="2022-26" linkedin="https://www.linkedin.com/in/vishal-deora-86783124a/" github="https://github.com/vish-100" instagram="https://www.instagram.com/deora.vishal/" email="mailto:btech10263.22@bitmesra.ac.in" />
      </div>
    </div>
  )
}

export default StudentBodyContainer
