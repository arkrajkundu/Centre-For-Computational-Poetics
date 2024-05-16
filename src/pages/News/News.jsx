import React from 'react'
import './News.css'
import NewsComponent from '../../components/NewsComponent/NewsComponent'

const News = () => {
  return (
    <div>
      <NewsComponent title={"National Level Workshop"} date={"January 2025"} />
      <NewsComponent title={"National Level Hackathon"} date={"September 2024"} />
      <NewsComponent title={"Summer Internship Programme"} date={"1 May - 30 June 2024"} />
    </div>
  )
}

export default News
