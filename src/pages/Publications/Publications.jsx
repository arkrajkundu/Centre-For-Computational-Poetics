import React from 'react'
import './Publications.css'
import JournalPublications from '../../components/JournalPublications/JournalPublications'
import ConferencePublications from '../../components/ConferencePublications/ConferencePublications'

const Publications = () => {
  return (
    <>
      <JournalPublications />
      <ConferencePublications />
    </>
  )
}

export default Publications
