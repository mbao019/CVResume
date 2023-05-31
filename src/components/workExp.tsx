import React from 'react';
import '../App.css';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';


function WorkExp() {

    return (

        <div className='workContainer'>

            <h1>Work Experience</h1>
            <h2>Freelance UI/UX Designer</h2>
            <h3>Proxure</h3>

            <ListItemText secondary="Dec 2022 - Current"/>

            <div style={{display: 'inline-block'}}>
                <ListItem><CheckIcon></CheckIcon><ListItemText primary="Worked collaboratively with the client to gather business requirements"/></ListItem>   
                <ListItem><CheckIcon></CheckIcon><ListItemText primary="Used Figma to make changes on a client’s UI/UX design based on the business requirements"/></ListItem>   
                <ListItem><CheckIcon></CheckIcon><ListItemText primary="Corrected the flow of the UI/UX design to ensure it functions as intended"/></ListItem>   
                <ListItem><CheckIcon></CheckIcon><ListItemText primary="Organized the Figma file provided by client to ensure the frames are well categorized and grouped together for clarity and easy accessibility"/></ListItem>   
                <ListItem><CheckIcon></CheckIcon><ListItemText primary="Presented ideas on the UI/UX design to make it more user-friendly"/></ListItem>   
                <ListItem><CheckIcon></CheckIcon><ListItemText primary="Consistently updated the client on the progression of the design on a regular basis"/></ListItem>  
            </div>
            
        </div>
    )
}

export default WorkExp