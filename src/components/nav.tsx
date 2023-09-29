import React from 'react'
import '../App.css'

import LinearProgress from '@mui/material/LinearProgress';

function Nav() {

    return (

        <div className='navContainer'>
            <div className='header'>
                <h1>MINH BAO</h1>
            </div>
            <LinearProgress color="secondary" />
        </div>
    )
}

export default Nav