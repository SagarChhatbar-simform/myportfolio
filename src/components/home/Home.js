import React from 'react'
import Middle from '../middle/Middle'
import Navbar from '../navbar/Navbar'
import Social from '../sociallinks/Social'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.middleParent}>

       <Navbar/>
        <Social />

        <Middle />
      </div>
    </div>
  )
}

export default Home