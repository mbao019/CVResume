import React from 'react'
import '../App.css'

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import Chip from '@mui/material/Chip';


function CoopExp() {

    return (

        <div className='coopContainer'>

            <h1>COOP Work Experience</h1>

            <Divider>
                <Chip label="WEB PRESENCE & COLLABORATION SERVICES TEAM (WP&C)" style={{color: 'blue'}} />
            </Divider>
            <br></br>

            <Divider textAlign="center" style={{color: 'darkgreen', paddingBottom: 20}}>Alberta Health Services (AHS)</Divider>

            <List
                sx={{
                    width: '100%',
                    maxWidth: 1300,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    opacity: 0.8,
                    background: 'none',
                }}
                >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ViewKanbanIcon />
                        </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary="INTERN" secondary="May 2021 – Dec 2021" />

                    <List>
                        <ListItem><ListItemText primary="Worked on front-end and back-end development for Privacy and Breach page on AHS Insite so when the form gets submitted, the data is correctly recorded on SharePoint with the appropriate emails sent out to the specified user and administrator"/></ListItem>   
                        <ListItem><ListItemText primary="Developed a SharePoint Lists on the WP&C team SharePoint site that keeps record of specific domains so that an email reminder will be sent out to the team lead 2 months in advance to renew the license before expirations"/></ListItem>   
                        <ListItem><ListItemText primary="Developed a timer for a client’s site for authentication purposes to maintain confidentiality of sensitive information"/></ListItem>   
                        <ListItem><ListItemText primary="Created a customized SharePoint site such as Kanban Board and Gantt Chart for collaborative project management for different teams in AHS"/></ListItem>   
                        <ListItem><ListItemText primary="Deployed from development to UAT/STG to production each sprint and did thorough QA testing afterwards so that there are no new bugs being introduced"/></ListItem>   
                        <ListItem><ListItemText primary="Assisted colleagues in managing and updating data entry by going through at least 10,000 data submitted by the public to input latitude and longitude coordinates in the database"/></ListItem>   
                        <ListItem><ListItemText primary="Provided guidance and assistance to clients on their tickets as well as helping other interns and colleagues on their tickets"/></ListItem>   
                        <ListItem><ListItemText primary="Took initiative in assigning myself additional tasks and bugs that are outstanding in addition to logging in any bugs that are detected through daily QA testing"/></ListItem>  
                    </List>

                </ListItem>

                <Divider />

            </List>
        </div>
    )
}

export default CoopExp