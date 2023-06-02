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
                    <h2>Biometric Health Screening</h2>
                    <h3>Lifemark</h3>

                    <ListItem><ListItemText secondary="May 2022 – July 2022"/></ListItem>   
                    <ListItem><ListItemText primary="Displayed confidentiality when gathering client’s personal information"/></ListItem>   
                    <ListItem><ListItemText primary="Maintained outstanding customer service when discussing about client’s heath results and the actions they can take to improve their overall health"/></ListItem>   
                    <ListItem><ListItemText primary="Adhered to the organization’s policy, procedures, and protocols by upholding professional standards at various site locations throughout Calgary"/></ListItem>   
                </div>

                <div>
                    <img src={surgical} alt='surgical' width={300}></img>
                    <h2>Surgical Float Team</h2>
                    <h3>Alberta Health Services (AHS)</h3>

                    <ListItem><ListItemText secondary="Oct 2018 – Dec 2021"/></ListItem>   
                    <ListItem><ListItemText primary="Collaborated with all team members by consistently doing rounds to discuss important updates to maintain transparency and positive work culture"/></ListItem>   
                    <ListItem><ListItemText primary="Utilized critical thinking skills by constantly assessing for any potential complications so that it can be addressed early on before problems starts to occur"/></ListItem>   
                    <ListItem><ListItemText primary="Maintained a calm demeanor in a fast-paced environment, meeting all deadlines in a timely manner, by organizing / prioritizing tasks when working on 5 surgical units"/></ListItem>   
                    <ListItem><ListItemText primary="Displayed responsibility in taking initiative with my own learning by researching on different skills and tasks to solve problems"/></ListItem>   
                </div>


                <div>
                    <img src={cdc} alt='cdc' width={300}></img>
                    <h2>Case and Contact Tracing</h2>
                    <h3>Centers for Disease Control and Prevention (CDC)</h3>

                    <ListItem><ListItemText secondary="Dec 2020 – Dec 2021"/></ListItem>   
                    <ListItem><ListItemText primary="Demonstrated professionalism by being independent and taking accountability in developing effective work habits in a remote setting"/></ListItem>   
                    <ListItem><ListItemText primary="Supported interdepartmental communication by emailing required information to other sectors  throughout Alberta that needs to be informed and notified for further client-based follow-ups and database record keeping"/></ListItem>   
                    <ListItem><ListItemText primary="Supported team members on solving cases / problems through exchanges of insightful tips, perspectives, and opinions"/></ListItem>   
                </div>
            </div>
            <LinearProgress color="success" />
        </div>
    )
}

export default RnExp