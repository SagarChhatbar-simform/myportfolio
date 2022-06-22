/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classes from './navbar.module.css'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useState } from 'react'
import reactlogo from '../../images/react.png'
import { Link } from 'react-router-dom'


function Navbar() {

  const [darkmode, setdarkmode] = useState(false);
  const darkmodehandler = () => {
    setdarkmode(!darkmode);
  }

  return (

   
        <div className={classes.hnav}>
          <div className={classes.title}>
            <img src={reactlogo} />
            <b>React Developer</b>
          </div>
          <div className={classes.linkbar}>
            <a href='/#section1'>HOME</a>
            <a href='/#section2'>WORK</a>
            <a href='/#section3'>PROJECTS</a>
            <a href='/#section4'>ARTICLES</a>
            <Link to='/Contact'>CONTACT</Link>
            {!darkmode && <FaMoon className={classes.darkicon} onClick={darkmodehandler} />}
            {darkmode && <FaSun className={classes.darkicon} onClick={darkmodehandler} />}
          </div>
        </div>
        

  )
}

export default Navbar