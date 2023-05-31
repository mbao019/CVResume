import React from 'react'
import '../App.css'

import calgary from '../images/calgary.jpg'
import bloodService from '../images/bloodService.jpg'
import dropInCentre from '../images/dropInCentre.jpg'
import mustardSeed from '../images/mustardSeed.jpg'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';


function Volunteering () {

    return (

        <div className='volunteerContainer'>
            <h1>Volunteer Experience</h1>

            <Grid container spacing={1} style={{ justifyContent: 'space-between'}}>
                <Grid item xs={6} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={calgary}
                        alt="calgary"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ backgroundColor: 'darkred', color: 'white', borderRadius: 5}}>
                            Flames Health/Wellness Camp
                        </Typography>
                        <ListItem><ListItemText secondary="April 2018" style={{fontStyle: 'italic' }}/></ListItem>   
                        <Typography variant="body1" color="text.primary">
                            Medical Screener
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={bloodService}
                        alt="Canadian Blood Services"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ backgroundColor: 'royalblue', color: 'white', borderRadius: 5}}>
                            Canadian Blood Services
                        </Typography>
                        <ListItem><ListItemText secondary="July 2016 - Aug 2016" style={{fontStyle: 'italic' }}/></ListItem>   
                        <Typography variant="body1" color="text.primary">
                            Blood Donation Recruiter
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>


                <Grid item xs={6} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={dropInCentre}
                        alt="Calgary Drop In Centre"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ backgroundColor: 'goldenrod', color: 'white', borderRadius: 5}}>
                            Calgary Drop In & Rehab Centre Society
                        </Typography>
                        <Typography variant="body1" color="text.primary">

                            <ListItem><ListItemText secondary="Feb 2015 / Sep 2016 - Oct 2016" style={{fontStyle: 'italic' }}/></ListItem>   
                            <ListItem><ListItemText primary="Food Service Worker"/></ListItem>
                            <ListItem><ListItemText primary="Health Promotion Coordinator"/></ListItem>   

                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={6} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={mustardSeed}
                        alt="The Mustard Seed"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ backgroundColor: 'green', color: 'white', borderRadius: 5}}>
                            The Mustard Seed
                        </Typography>
                        <ListItem><ListItemText secondary="Oct 2014" style={{fontStyle: 'italic' }}/></ListItem>   
                        <Typography variant="body1" color="text.primary">
                            Organizing Clothes and Donation Orders
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Volunteering