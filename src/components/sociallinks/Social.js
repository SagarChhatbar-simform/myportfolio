import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram,FaGithub } from 'react-icons/fa'
import classes from './social.module.css'

function Social() {
    return (
        <div className={classes.frame}>
            
                <a href='#twitter'><FaTwitter /></a>
                <a href='#facebook'><FaFacebook /></a>
                <a href='#instagram'><FaInstagram /></a>
                <a href='#Github'><FaGithub /></a>

            
        </div>
    )
}

export default Social