import React from 'react'
import classes from './middle.module.css'
import geekavatar from '../../images/blogging.png'
import geekavatar1 from '../../images/me-light.png'
import flipcart from '../../images/flip.png'
import { useSelector, useDispatch} from 'react-redux';
import {darkActions} from '../../store/darmodeReducer';
import { useEffect } from 'react'


// #2d475e


import { IoIosArrowDropdownCircle } from 'react-icons/io'


function Middle() {

  
  const dark = useSelector(state=>state.darkmode.darkmode);

  useEffect(() => {
    //changing color of body with darkmode in useEffect
    document.getElementsByClassName(classes.innerDiv)[0].style.backgroundColor = dark ? "rgb(29, 71, 98)" : "#3a84c6";
    document.getElementsByClassName(classes.innerDiv)[1].style.backgroundColor = dark ? "rgb(29, 71, 98)" : "#3a84c6";
    document.getElementsByClassName(classes.innerDiv)[2].style.backgroundColor = dark ? "rgb(29, 71, 98)" : "#3a84c6";
    document.getElementsByClassName(classes.innerDiv)[3].style.backgroundColor = dark ? "rgb(29, 71, 98)" : "#3a84c6";
  }, [dark]);
  return (

    <React.Fragment>

      <div className={classes.parentmiddle}>
        <div className={classes.innerDiv} id='section1'>
          <div className={classes.text}>
            <h1>
              <p>HELLO, I AM SAGAR CHHATBAR</p>

            </h1>
          </div>
          <div className={classes.arrowdown}>
            <a href='#section2'><IoIosArrowDropdownCircle className={classes.arrow} /></a>
          </div>
          <div className={classes.innerimg}>
            <img src={geekavatar} alt="" />
          </div>

        </div>

        <div className={classes.innerDiv} id='section2'>
          <div className={classes.middlediv}>
            <h1>Work Experience</h1>

            <div className={classes.avatarimg}>

              <img src={geekavatar1} />


            </div>

          </div>

          <div className={classes.timeline}>
            <ul>
              <li>
                <span>MAY 2022</span>
                <div className={classes.content}>
                  <h3>Simform Solutions PVT. LTD.</h3>
                  <p>
                    Full-Time Employee at Simform Solutions PVT. LTD.
                  </p>
                </div>
              </li>
              <li>
                <span>DEC 2021</span>
                <div className={classes.content}>
                  <h3>Simform Solutions PVT. LTD.</h3>
                  <p>
                    Internship at Simform Solutions PVT. LTD.
                  </p>
                </div>
              </li>
              <li>
                <span>JUN 2021</span>
                <div className={classes.content}>
                  <h3>i-Genesys IT sevices</h3>
                  <p>
                    Internship at i-Genesys IT sevices
                  </p>
                </div>
              </li>
              <li>
                <span>JUN 2020</span>
                <div className={classes.content}>
                  <h3>Charusat University</h3>
                  <p>
                    Internship at Charusat University
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.innerDiv} id='section3'>
          <div className={classes.parentproject}>
            <div className={classes.project1}>
              <img src={flipcart} />
              <div className={classes.descrip}>
                <div className={classes.project_name}>
                 FlipKart Clone 
                </div>
                <div className={classes.project_dec}>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </div>
                <div className={classes.project_tec}>
                  HTML CSS JAVASCRIPT
                </div>
              </div>
            </div>
            <div className={classes.project1}>
              <div className={classes.descrip}>
                <div className={classes.project_name}>
                 FlipKart Clone 
                </div>
                <div className={classes.project_dec}>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </div>
                <div className={classes.project_tec}>
                  HTML CSS JAVASCRIPT
                </div>
              </div>
              <img src={flipcart} />

            </div>
            <div className={classes.project1}>
              <img src={flipcart} />
              <div className={classes.descrip}>
                <div className={classes.project_name}>
                 FlipKart Clone 
                </div>
                <div className={classes.project_dec}>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </div>
                <div className={classes.project_tec}>
                  HTML CSS JAVASCRIPT
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.innerDiv} id='section4'>
          hii
        </div>


      </div>
    </React.Fragment>
  )
}

export default Middle