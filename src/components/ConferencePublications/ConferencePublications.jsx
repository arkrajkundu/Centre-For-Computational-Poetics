import React from 'react'
import './ConferencePublications.css'
import Publication from '../Publication/Publication'

const ConferencePublications = () => {
  return (
    <div className='conference-publications'>
      <h2>CONFERENCE PUBLICATIONS</h2>
      <Publication publicationDetail={"Naaz, K., and Singh, N.K., 2023. Design and development of an automated tool for determining the presence and extent of rhyme in free verse. 12th International Conference on Advances in Computer Science and Application - CSA, Bengaluru, India. March 2023."} />
    </div>
  )
}

export default ConferencePublications
