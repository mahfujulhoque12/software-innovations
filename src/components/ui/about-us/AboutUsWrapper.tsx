import React from 'react'
import AboutHero from './atom/AboutHero'
import Values from './atom/Values'
import VissionMission from './atom/VissionMission'
import Evolution from './atom/Evolution'

const AboutUsWrapper = () => {
  return (
    <div>
        <AboutHero/>
        <Values/>
        <VissionMission/>
        <Evolution/>
    </div>
  )
}

export default AboutUsWrapper