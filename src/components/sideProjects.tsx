import React from 'react';

import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';


function SideProjects () {

    const theme = useTheme();

    return (

        <div className='sideProjects'>
            <Card sx={{
                maxWidth: 600, 
                borderRadius: 5,
                // flexDirection: {xs: 'row', sm:'row', md:'row'},
                }} 
                className='leftgrid'> 
                <CardContent>
                    <Typography variant="h5" component="div">
                        Resume Website
                    </Typography>
                    <Typography variant="body2">
                        <ListItem><ListItemText secondary="Used TypeScript to developed a website that replicates my personal resume"/></ListItem>   
                        <ListItem><ListItemText secondary="Integrated MaterialUI (MUI) to design the UI/UX layout"/></ListItem>   
                        <ListItem><ListItemText secondary="Deployed site on Netlify"/></ListItem>
                        <ListItem><ListItemText secondary="Responsive for mobile, tablet, and desktop"/></ListItem>

                    </Typography>
                </CardContent>
            </Card>

            <Divider orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"} flexItem sx={{ color: 'darkblue', padding: 2 }}>SIDE PROJECTS</Divider>

            <Card sx={{
                maxWidth: 600, 
                borderRadius:5  }} 
                className='rightgrid'>
                <CardContent>
                <Typography variant="h5" component="div">
                    Book Library
                </Typography>
                <Typography variant="body2">
                    <ListItem><ListItemText secondary="Used React to create a book list that allows users to add, delete, and modify a book"/></ListItem>   
                    <ListItem><ListItemText secondary="Integrated PrimeReact to design the UI/UX to allow features but not limited to sorting and filtering the book list by title, author, date, or genre"/></ListItem>   
                    <ListItem><ListItemText secondary="Used Node.js to connect to MongoDB as the database to store the list of books"/></ListItem>   
                    <ListItem><ListItemText secondary="Added features such as graphs to provide statistics on the total numbers of each genres that are on the book list"/></ListItem>   
                </Typography>
            </CardContent>

            {/* <CardActions>
                <Button onClick={() => { alert("Soon!")}} size="small">CLICK HERE!</Button>
            </CardActions> */}
            </Card>
        
        </div>
    )
}

export default SideProjects