import React from 'react'
import '../App.css'

import biometric from '../images/biometric.jpg'
import surgical from '../images/surgical.jpg'
import cdc from '../images/cdc.jpg'

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress'

function RnExp() {

    return (

        <div className='rnHeader'>

            <h1>Registered Nurse Work Experience</h1>

            <div className='rnContainer'>

                <div>
                    <img src={biometric} alt='biometric' width={300}></img>
                    <h2>Lifemark</h2>

                    <ListItem><ListItemText secondary="Dec 2020 – Dec 2021" /></ListItem>
                    <ListItem><ListItemText primary="Maintained outstanding customer service when discussing about client’s heath results " /></ListItem>
                    <ListItem><ListItemText primary="Upheld professional standards by adhering to organization’s policy, procedures, and protocols" /></ListItem>
                </div>

                <div>
                    <img src={cdc} alt='cdc' width={300}></img>
                    <h2>Centers for Disease Control and Prevention (CDC)</h2>

                    <ListItem><ListItemText secondary="Dec 2020 – Dec 2021" /></ListItem>
                    <ListItem><ListItemText primary="Good interpersonal, written, and verbal communications skills when emailing required information to other sectors throughout Alberta" /></ListItem>
                </div>

                <div>
                    <img src={surgical} alt='surgical' width={300}></img>
                    <h2>Alberta Health Services (AHS)</h2>

                    <ListItem><ListItemText secondary="Dec 2018 – Dec 2021" /></ListItem>
                    <ListItem><ListItemText primary="Utilized critical thinking skills by constantly assessing for any potential complications so that it can be addressed early on before problems starts to occur" /></ListItem>
                    <ListItem><ListItemText primary="Displayed responsibility in taking initiative with my own learning by researching technical solutions, standards, and products" /></ListItem>
                </div>

            </div>
            <LinearProgress color="success" />
        </div>
    )
}

export default RnExp