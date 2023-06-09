import React from 'react'
import '../App.css'

import Contact from './contact';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

function CoverLetter () {

    return (
        <div>

            <div className='cvContainer'>
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    padding: 5,
                    borderRadius: 1,
                    flexDirection: {xs: 'column', sm:'column', md:'row'},
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

                        Throughout my professional career, I have had passion in building strong relationships with individuals and utilizing technology to create a positive experience in the lives of others. I believe my skills and experience are aligned with the role’s requirements and I am very excited to take on the position and be a part of the team. 
                        <br></br><br></br>
                        As a co-op student at Alberta Health Services (AHS), I was able to connect and work alongside the Web Presence and Collaboration Service team. My role consisted of both front-end and back-end development when creating a customized SharePoint site such as developing a Kanban Board and Gantt Chart for collaborative project management for different teams throughout AHS. I also took on independent projects, such as developing a timer as a web feature for user authentication, Privacy and Breach form on an AHS Insite website, SharePoint List that emails an administrator when a domain is about to expire, updating at least 10,000 data entry submitted by users based on their geographical location, and working through solving client’s tickets. Through weekly scrum meetings, I collaborate with the client to go over the progress that I have completed to ensure the requirements are met, and any changes or enhancements are implemented effectively. 
                        <br></br><br></br>
                        My background and experience as a Registered Nurse provided me with strong critical thinking skills and problem-solving abilities to address ambiguous situations. I can effectively adapt to changing priorities to ensure project continuity while maintaining positive relationships with all my clients and colleagues. I am passionate about continually learning and utilizing the latest technologies to create positive impacts in my work.
                        <br></br><br></br>
                        I believe that my skills and experience would make me a valuable addition to your team. Thank you and I look forward to the opportunity to connect!
                    </Box>
                    
                </div>
            <LinearProgress />
        </div>
    )
}

export default CoverLetter
