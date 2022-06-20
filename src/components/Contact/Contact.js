import React from 'react'
import Navbar from '../navbar/Navbar'
import Social from '../sociallinks/Social'
import classes from './contact.module.css'
function Contact() {
  return (
    <React.Fragment>
      <Navbar />
      <Social />
      <div className={classes.parentmiddle}>
        <div className={classes.innerDiv}>
          <form>
            <div>
              <div>
                Name
                <input type='text' placeholder='Name' />
                Email
                <input type='email' placeholder='Email' />
              </div>
              Subject
              <input type='text' placeholder='Subject' />
              Message
              <textarea placeholder='Message' />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact