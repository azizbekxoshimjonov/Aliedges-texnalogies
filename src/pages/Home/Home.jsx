import React from 'react'
import './Home.scss'
import Abaut from '../../components/Abaut/Abaut'

import Hero from '../../components/Hero/Hero'
import Group from '../../components/Group/Group'
import Lets from '../../components/Letsup/Lets'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Abaut/>
      <Group/>
      <Lets/>
    </div>
  )
}

export default Home
