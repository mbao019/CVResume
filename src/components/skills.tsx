import React from 'react';
import '../App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';


function Skills() {

  return (
    <div className="skillsContainer">

        <h1>Skills & Competencies</h1>

        <div>
            
            <Grid container spacing={1}>
                <Grid item xs={6} lg={6}>
                <Card sx={{color:'red'}}>
                    <CardContent>
                        <Typography>Java, Python, PHP</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={6}>
                <Card sx={{color:'blue'}}>
                    <CardContent>
                        <Typography>React, TypeScript, HTML, CSS, JavaScript, DOM, jQuery</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={3}>
                <Card sx={{color:'orange'}}>
                    <CardContent>
                        <Typography>PrimeReact, MaterialUI</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={3}>
                <Card sx={{color:'purple'}}>
                    <CardContent>
                        <Typography>MongoDB, Azure</Typography>
                    </CardContent>
                </Card>
                </Grid>


                <Grid item xs={6} lg={3}>
                <Card sx={{color:'grey'}}>
                    <CardContent>
                        <Typography>MySQL, NoSQL</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={3}>
                <Card sx={{color:'brown'}}>
                    <CardContent>
                        <Typography>Figma</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={12} lg={12}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>Data Modeling: ERD, Use Case Diagrams, Relational Model, State Diagrams, Star Schema</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={6}>
                <Card sx={{color:'black'}}>
                    <CardContent>
                        <Typography>ServiceNow ITSM, Open Text Web Site Management</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={6}>
                <Card sx={{color:'goldenrod'}}>
                    <CardContent>
                        <Typography>SharePoint, SharePoint Designer, SharePoint CSOM</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'violet'}}>
                    <CardContent>
                        <Typography>Critical Thinking & Problem-Solving</Typography>
                    </CardContent>
                </Card>
                </Grid>


                <Grid item xs={6} lg={2}>
                <Card sx={{color:'violet'}}>
                    <CardContent>
                        <Typography>Effective Communication</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'violet'}}>
                    <CardContent>
                        <Typography>Collaborative Team-player</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'violet'}}>
                    <CardContent>
                        <Typography>Thorough Documentation Skills</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'violet'}}>
                    <CardContent>
                        <Typography>Time Management & Adaptability</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'violet'}}>
                    <CardContent>
                        <Typography>Positive Attitude <EmojiEmotionsOutlinedIcon></EmojiEmotionsOutlinedIcon></Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}

export default Skills
