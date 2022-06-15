/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Middle from '../middle/Middle'
import Social from '../sociallinks/Social'
import classes from './navbar.module.css'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useState } from 'react'
import reactlogo from '../../images/react.png'


function Navbar() {

  const [darkmode, setdarkmode] = useState(false);
  const darkmodehandler = () => {
    setdarkmode(!darkmode);
  }

  return (

    <div className={classes.container}>
      <div className={classes.middleParent}>

        <div className={classes.hnav}>
          <div className={classes.title}>
            <img src={reactlogo}/>
            <b>React Developer</b>
          </div>
          <div className={classes.linkbar}>
            <a href=''>INTRO</a>
            <a href=''>WHO</a>
            <a href=''>WHAT</a>
            <a href=''>WORK</a>
            <a href=''>ABOUT</a>
            {!darkmode && <FaMoon className={classes.darkicon} onClick={darkmodehandler} />}
            {darkmode && <FaSun className={classes.darkicon} onClick={darkmodehandler} />}
            {/* <label className={classes.switch}>
              <input type="checkbox"/>
                <span className={classes.slider}></span>
            </label> */}
          </div>
        </div>
        <Social />

        <Middle />
      </div>
    </div>

  )
}

export default Navbar