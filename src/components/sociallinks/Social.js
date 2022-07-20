import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram,FaGithub } from 'react-icons/fa'
import classes from './social.module.css'
import { useSelector} from 'react-redux';
import { useEffect } from 'react'

function Social() {

    const dark = useSelector(state=>state.darkmode.darkmode);

    useEffect(() => {
        //changing color of body with darkmode in useEffect
        document.getElementById(classes.frame).style.backgroundColor = dark ? "rgb(29, 71, 98)" : "#3a84c6";

    
      }, [dark]);
    return (
        <div className={classes.frame} id={classes.frame}>
            
                <a href='#twitter'><FaTwitter /></a>
                <a href='#facebook'><FaFacebook /></a>
                <a href='#instagram'><FaInstagram /></a>
                <a href='#Github'><FaGithub /></a>
        </div>
    )
}

export default Social