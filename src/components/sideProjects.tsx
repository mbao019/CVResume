import React from 'react';

import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';



function SideProjects() {

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
                        Personal Porfolio
                    </Typography>
                    <Typography variant="body2">
                        <ListItem><ListItemText secondary="Developed a website that highlights my skills and experiences" /></ListItem>
                        <ListItem><ListItemText secondary="Responsive for mobile, tablet, and desktop" /></ListItem>
                        <ListItem><ListItemText secondary="TECHNOLOGIES USED: TypeScript, MaterialUI (MUI)" /></ListItem>
                    </Typography>
                </CardContent>
            </Card>

            <Divider orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"} flexItem sx={{ color: 'darkblue', padding: 2 }}>PERSONAL PROJECTS</Divider>

            <Card sx={{
                maxWidth: 600,
                borderRadius: 5
            }}
                className='rightgrid'>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Book Database
                    </Typography>
                    <Typography variant="body2">
                        <ListItem><ListItemText secondary="MERN stack web development framework:" /> <Link component="a" href='https://github.com/mbao019/BookLibrary' target='_blank'>Github URL: BookLibrary</Link> </ListItem>
                        <ListItem><ListItemText secondary="Developed a CRUD (Create, Read, Update, Delete) application for list of books" /></ListItem>
                        <ListItem><ListItemText secondary="Features include but not limited to sorting, filtering the book list by title, author, date, or genre, and graphs to provide statistics on the total numbers of each genres mentioned in the library" /></ListItem>
                        <ListItem><ListItemText secondary="TECHNOLOGIES USED: React, PrimeReact, Node.JS, MongoDB" /></ListItem>

                    </Typography>
                </CardContent>
            </Card>

        </div >
    )
}

export default SideProjects