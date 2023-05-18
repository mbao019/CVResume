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

        <div style={{ padding: 30 }}>
            
            <Grid container spacing={5}>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'red'}}>
                    <CardContent>
                        <Typography>Java</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'red'}}>
                    <CardContent>
                        <Typography>Python</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent><Typography>React</Typography></CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>HTML</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>CSS</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>JavaScript</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>DOM</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>jQuery</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>CSOM</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color:'green'}}>
                    <CardContent>
                        <Typography>PHP</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'goldenrod'}}>
                    <CardContent>
                        <Typography>MongoDB</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'goldenrod'}}>
                    <CardContent>
                        <Typography>Azure</Typography>
                    </CardContent>
                </Card>
                </Grid>
            
                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'goldenrod'}}>
                    <CardContent>
                        <Typography>MySQL</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'goldenrod'}}>                   
                 <CardContent>
                        <Typography>Figma</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card>
                    <CardContent> 
                        <Typography sx={{color:'purple'}}>Data Modelling</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'purple'}}>                   
                    <CardContent> 
                        <Typography>ERD</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'purple'}}>                   
                    <CardContent> 
                        <Typography>Use Case Diagrams</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'purple'}}>                   
                    <CardContent> 
                        <Typography>Relational Model</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card sx={{color: 'purple'}}>                   
                    <CardContent> 
                        <Typography>State Diagrams</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={1.5}>
                <Card  sx={{color:'purple'}}>
                    <CardContent> 
                        <Typography>Star Schema</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color: 'grey'}}>
                    <CardContent>
                        <Typography>SharePoint</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color: 'grey'}}>                    
                    <CardContent>
                        <Typography>SharePoint Designer</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color: 'grey'}}>                    
                    <CardContent>
                        <Typography>Open Text Web Site Management</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'blue'}}>
                    <CardContent>
                        <Typography>Critical Thinking & Problem-Solving</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'blue'}}>
                <CardContent>
                        <Typography>Effective Communication</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'blue'}}>
                    <CardContent>
                        <Typography>Collaborative Team-layer</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'blue'}}>
                    <CardContent>
                        <Typography>Thorough Documentation Skills</Typography>
                    </CardContent>
                </Card>
                </Grid>

                <Grid item xs={6} lg={2}>
                <Card sx={{color:'blue'}}>
                    <CardContent>
                        <Typography>Time Management & Adaptability</Typography>
                    </CardContent>
                </Card>
                </Grid>
                
                <Grid item xs={6} lg={2}>
                <Card sx={{color:'blue'}}>
                    <CardContent>
                        <Typography>Positive Attitude <EmojiEmotionsOutlinedIcon /></Typography>
                    </CardContent>
                </Card>
                </Grid>
                
      
            </Grid>
        </div>
    </div>
  );
}

export default Skills
