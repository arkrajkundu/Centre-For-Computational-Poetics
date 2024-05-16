import React from 'react'
import './Footer.css'
import FacultyCard from '../FacultyCard/FacultyCard'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <h2 className='ccp-heads'>CCP Heads</h2>
      <div className="row">
        <FacultyCard img={assets.nks} name="Dr. Niraj Kumar Singh" title="Project Head - Centre for Computational Poetics" designation="Assistant Professor" branch="Computer Science and Engineering" email="mailto:nksingh@bitmesra.ac.in" />
        <FacultyCard img={assets.itu} name="Dr. Itu Snigdh" title="Co Project Head - Centre for Computational Poetics" designation="Assistant Professor" branch="Computer Science and Engineering" email="mailto:itusnigdh@bitmesra.ac.in" />
      </div>
    </div>
  )
}

export default Footer
