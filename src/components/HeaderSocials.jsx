import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs";
import {BsMedium} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/Janhvi52/" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/janhvi-singh-539989227/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/janhvi.__.singh/" target="_blank"><BsInstagram/></a>
        <a href="https://medium.com/@janhvi52" target="_blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials