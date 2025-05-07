import React from 'react'
import ServiceHero from './atom/ServiceHero'
import Web from './atom/Web'
import Mobile from './atom/Mobile'
import UIUX from './atom/UIUX'
import Video from './atom/Video'
import Review from './atom/Review'
import CallToAction from './atom/CallToAction'

const ServicesWrapper = () => {
  return (
    <div>
        <ServiceHero/>
        <Web/>
        <Mobile/>
        <UIUX/>
        <Video/>
        <Review/>
        <CallToAction/>
    </div>
  )
}

export default ServicesWrapper