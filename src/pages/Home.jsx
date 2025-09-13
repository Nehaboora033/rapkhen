import React from 'react'
import Hero from '../components/Hero'
import OurActivities from '../components/OurActivities'
import LatestBlog from '../components/LatestBlog'
import MeetOurTeam from '../components/MeetOurTeam'
import OurGallery from '../components/OurGallery'

const Home = () => {
  return (
    <>
      <Hero />
      <OurActivities />
      <LatestBlog />
      <MeetOurTeam />
      <OurGallery />
    </>
  )
}

export default Home