import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import './Home.scss'


function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <FeaturedProducts type="Trend"/>
    </div>
  )
}

export default Home