import React from 'react'
import '../App.css'

import Contact from './contact';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

function CoverLetter() {

    return (
        <div>

            <div className='cvContainer'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        padding: 3,
                        borderRadius: 1,
                        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                        bgcolor: 'background.paper',
                        '& svg': {
                            m: 0.5,
                        },
                        '& hr': {
                            mx: 5,
                        },
                    }}
                >
                    <Contact />
                    <Divider orientation="vertical" flexItem />

                    <div id='cvInfo'>
                        Throughout my 8 month internship in the IT department at Alberta Health Services (AHS), I was able to connect and work alongside the Web Presence and 
                        Collaboration Service team. I worked on both front-end and back-end development, using mainly JavaScript, JQuery, HTML, CSS, APIs, and CSOM to create a 
                        customized SharePoint site that involved developing a Kanban Board and Gantt Chart for collaborative project management for different teams throughout AHS. 
                        I also took on independent projects, such as developing a timer as a web feature for user authentication, Privacy and Breach form on an AHS Insite website, 
                        SharePoint List that emails an administrator when a domain is about to expire, and working through solving client’s tickets. My experience at AHS as an IT 
                        intern will allow me to utilize my programming skills in working with larger software projects, and my ability to employ analytical thinking and creative 
                        solutions to address challenges.
                        <br></br><br></br>
                        My background and experience as a Registered Nurse provided me with strong analytical and problem-solving abilities to address and respond accordingly to 
                        various situations. I can effectively adapt to changing priorities and work under high pressure to ensure project continuity while maintaining a team-oriented 
                        and collaborative environment with clients and colleagues. My passion towards continuous learning opportunities and utilizing the latest technologies to 
                        create positive impacts in my work will be an asset to the team.                        
                        <br></br><br></br>  
                    </div>  

                </Box>

            </div>
            <LinearProgress />
        </div>
    )
}

export default CoverLetter
