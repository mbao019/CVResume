import React from 'react'
import '../App.css'
import Photo from '../images/myPhoto.jpg'
import Link from '@mui/material/Link';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Contact () {

    return (

        <div className='contactContainer'>
                
            <img src={Photo} alt='myPhoto' width={220}></img>
            
            <p><MailOutlineIcon></MailOutlineIcon>minhb95@gmail.com</p>
            <p><PhoneIcon></PhoneIcon>(403) 891-9028</p>
            <p><LocationOnIcon></LocationOnIcon>Calgary, Alberta, Canada</p>
            <Link href='https://www.linkedin.com/in/minh-bao/' target='_blank'><LinkedInIcon></LinkedInIcon>LinkedIn</Link>
        </div>

    )
}

export default Contact