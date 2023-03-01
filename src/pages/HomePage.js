import React from 'react'
import Destinations from '../components/Destinations'
import Hero from '../components/Hero'
import ImageCarousel from '../components/ImageCarousel'
import Search from '../components/Search'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <Search/>
        <Destinations/>
        <ImageCarousel/>
    </>
  )
}

export default HomePage