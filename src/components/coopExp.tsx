import React from 'react'
import '../App.css'

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';

function CoopExp() {

    return (

        <div>
            <div className='coopHeader'>
                <h1>Relevant Work Experience</h1>
            </div>
            
            <div className='coopContainer'>

                <Divider textAlign="center" style={{ color: 'blue', fontSize: 'large', padding: 20 }}>FREELANCE BUSINESS ANALYST</Divider>
                <Chip label="Proxure" style={{ color: 'darkgreen', fontSize: 'medium', padding: 20 }} />
                <Divider textAlign="center" style={{ color: 'grey', padding: 20 }}>Dec 2022 – Aug 2023</Divider>

                <List
                    sx={{
                        width: '100%',
                        maxWidth: 1300,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        opacity: 0.8,
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>

                        <List>
                            <ListItem><ListItemText primary="Worked collaboratively with the client to gather business requirements in order to make changes on the UI/UX design using Figma" /></ListItem>
                            <ListItem><ListItemText primary="Corrected the flow of the UI/UX design to ensure it functions as intended" /></ListItem>
                            <ListItem><ListItemText primary="Organized the client's Figma file to ensure the frames are well grouped and categorized for clarity and easy accessibility" /></ListItem>
                            <ListItem><ListItemText primary="Effectively communicated ideas on the UI/UX design to make it more user-friendly" /></ListItem>
                            <ListItem><ListItemText primary="Consistently updated the client on the progression of the design on a weekly basis" /></ListItem>
                        </List>

                    </ListItem>
                </List>

                <Divider textAlign="center" style={{ color: 'blue', fontSize: 'large', padding: 20 }}>INFORMATION TECHNOLOGY INTERN</Divider>
                <Chip label="Alberta Health Services (AHS)" style={{ color: 'darkgreen', fontSize: 'medium', padding: 20 }}></Chip>
                <Divider textAlign="center" style={{ color: 'grey', padding: 20 }}>May 2021 - Dec 2021</Divider>

                <List
                    sx={{
                        width: '100%',
                        maxWidth: 1300,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        opacity: 0.8,
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PeopleIcon />
                            </Avatar>
                        </ListItemAvatar>

                        <List>
                            <ListItem><ListItemText primary="Worked on front-end and back-end development for Privacy and Breach form page on AHS Insite using mainly JavaScript, JQuery, and CSOM to manipulate data on SharePoint" /></ListItem>
                            <ListItem><ListItemText primary="Developed a timer using JavaScript, JQuery, and CSS as an added web feature for a client’s site to authenticate users in order to maintain confidentiality of sensitive information" /></ListItem>
                            <ListItem><ListItemText primary="Created a customized SharePoint site that involved developing a Kanban Board and Gantt Chart using mainly JavaScript, JQuery, CSS, and APIs" /></ListItem>
                            <ListItem><ListItemText primary="Created a SharePoint List that emails an administrator 2 months prior to when a domain expired" /></ListItem>
                            <ListItem><ListItemText primary="Thorough documentation skills when adding comments and explanation for each source code to provide easier and better understanding that is human-readable " /></ListItem>
                            <ListItem><ListItemText primary="Deployed from development to UAT/STG to production each sprint and did thorough QA testing afterwards so that there are no new bugs being introduced" /></ListItem>                            
                            <ListItem><ListItemText primary="Managed and updated at least 10,000 data entry submitted by Albertans by inputting their coordinates based on latitude and longitude in the database" /></ListItem>
                            <ListItem><ListItemText primary="Provided strong customer service when troubleshooting technical issues and when articulating ideas/solutions clearly using non-technical language based on the client’s tickets" /></ListItem>
                            <ListItem><ListItemText primary="Took initiative in assigning myself additional tickets, tasks, and bugs that are outstanding in addition to logging in any bugs that are detected through daily QA testing" /></ListItem>
                            <ListItem><ListItemText primary="Led and participated in daily scrums" /></ListItem>
                        </List>

                    </ListItem>
                </List>
                
            </div>
        </div>
    )
}

export default CoopExp