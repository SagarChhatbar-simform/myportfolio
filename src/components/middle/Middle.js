import React from 'react'
import classes from './middle.module.css'
import geekavatar from '../../images/guy.png'
import geekavatar1 from '../../images/me-light.png'

import { FaArrowDown } from 'react-icons/fa'


function Middle() {
  return (

    <React.Fragment>

      <div className={classes.parentmiddle}>

        <div className={classes.innerDiv}>
          <div className={classes.text}>
            <h1>
              <p>HELLO, I AM SAGAR CHHATBAR</p>

            </h1>
          </div>
          <div className={classes.arrowdown}>
            <FaArrowDown />
          </div>
          <div className={classes.innerimg}>
            <img src={geekavatar} alt="" />
          </div>

        </div>

        <div className={classes.innerDiv}>

          <div className={classes.avatarimg}>
          <h1>Work Experience</h1>

            <img src={geekavatar1} />
            
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






        <div className={classes.innerDiv}>
          hii
        </div>

        <div className={classes.innerDiv}>
          hii
        </div>


      </div>
    </React.Fragment>
  )
}

export default Middle