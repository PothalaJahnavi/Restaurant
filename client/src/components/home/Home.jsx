import React from 'react'
import ChefDetails from '../chefDetails/ChefDetails'
import DailySpecials from '../dailySpecials/DailySpecials'
import Header from '../header/Header'
import OurServices from '../ourServices/OurServices'

const Home = () => {
  return (
    <div id="content">
      <Header/>
      <OurServices/>
      <DailySpecials/>
      <ChefDetails/>
    </div>
  )
}

export default Home
