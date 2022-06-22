import React from 'react'
import Navbar from '../navbar/Navbar'
import Social from '../sociallinks/Social'
import classes from './contact.module.css'
import formimg from '../../images/form.png'

function Contact() {
  return (
    <React.Fragment>
      <Navbar />
      <Social />
      <div className={classes.parentmiddle}>
        <div className={classes.innerDiv}>
          <img src={formimg} />

          <div className={classes.formstyle}>
            <form>
              <h1>Contact Me</h1>
              <input type='text' placeholder='Name' />
              

              <input type='email' placeholder='Email' />

             

              <input type='text' placeholder='Subject' />

              
              <textarea placeholder='Message' />


              <button>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact