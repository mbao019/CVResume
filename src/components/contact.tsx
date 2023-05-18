import React from 'react'
import '../App.css'

import LinearProgress from '@mui/material/LinearProgress';

function Contact () {

    return (

        <div className='contactContainer'>

            <LinearProgress color="inherit" />

                
            <h1>Contact</h1>
            <p>Email</p>
            <p>Cell Number</p>
            <p>Location</p>
        </div>

    )
}

export default Contact