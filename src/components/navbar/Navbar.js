import React from 'react'
import classes from './navbar.module.css'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect } from 'react'
import reactlogo from '../../images/react.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import {darkmodeActions} from '../../store/darkmodeReducer';

function Navbar() {
  
  const dispatch = useDispatch();
  const dark = useSelector(state=>state.darkmode.darkmode);

  // console.log(dark);

  const darkmodehandler = () => {
    dispatch(darkmodeActions.toggleDarkmode());
  }
  useEffect(() => {
    //changing color of body with darkmode in useEffect
    document.getElementById(classes.dark).style.backgroundColor = dark ? "rgb(7, 42, 64)" : "#fff";

  }, [dark]);

  return (

   
        <div className={classes.hnav} id={classes.dark} >
          <div className={classes.title}>
            <img src={reactlogo} alt=''/>
            <b>React Developer</b>
          </div>
          <div className={classes.linkbar}>
            <a href='/#section1'>HOME</a>
            <a href='/#section2'>WORK</a>
            <a href='/#section3'>PROJECTS</a>
            <a href='/#section4'>ARTICLES</a>
            <Link to='/Contact'>CONTACT</Link>
            {!dark && <FaMoon className={classes.darkicon} onClick={darkmodehandler} />}
            {dark && <FaSun className={classes.darkicon} onClick={darkmodehandler} />}
          </div>
        </div>
        

  )
}

export default Navbar