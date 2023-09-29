import React from 'react';
import '../App.css';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function WorkExp() {

    return (

        <div className='workHeader'>

            <h1>Relevant Work Experience</h1>

            <div className='workContainer'>

                <h2>Freelance Business Analyst</h2>
                <h3>Proxure</h3>

                <ListItemText secondary="Dec 2022 - Aug 2023" />

                <div style={{ display: 'inline-block' }}>
                    <ListItem><ListItemText primary="Worked collaboratively with the client to gather business requirements in order to make changes on the UI/UX design using Figma" /></ListItem>
                    <ListItem><ListItemText primary="Corrected the flow of the UI/UX design to ensure it functions as intended" /></ListItem>
                    <ListItem><ListItemText primary="Organized the client's Figma file to ensure the frames are well grouped and categorized for clarity and easy accessibility" /></ListItem>
                    <ListItem><ListItemText primary="Effectively communicated ideas on the UI/UX design to make it more user-friendly" /></ListItem>
                    <ListItem><ListItemText primary="Consistently updated the client on the progression of the design on a weekly basis" /></ListItem>
                </div>
            </div>

        </div>
    )
}

export default WorkExp