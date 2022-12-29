import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import './Home.scss'


function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <Categories/>

      <FeaturedProducts type="Trend"/>
      <Contact/>

    </div>
  )
}

export default Home