import React from 'react'
import '../App.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';



function SchoolProjects() {

    return (

        <div className='projectsHeader'>
            <h1>School Projects</h1>

            <div className='projectsContainer'>

                <Grid container spacing={1}>

                    <Grid item xs={12} sm={12} md={4}>
                        <Card className="project1" sx={{ backgroundColor: 'lightskyblue', borderRadius: 10, padding: 1 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Covid Database
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Jan 2022 – Apr 2022
                                </Typography>
                                <Typography variant="body2">
                                    <ListItem><ListItemText secondary="Designed a star schema and created a data warehouse by identifying 2 fact tables and 8 dimension tables" /></ListItem>
                                    <ListItem><ListItemText secondary="Utilized Azure SQL Database to store covid-related data for Canada and for each provinces" /></ListItem>
                                    <ListItem><ListItemText secondary="Implemented a pipeline to make it automated so that it can continually obtain updated data" /></ListItem>
                                    <ListItem><ListItemText secondary="Used PowerBI for the covid statistics where it can be filtered by date, province, region, age range, gender, recovered, and deaths" /></ListItem>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={12} md={4}>
                        <Card className="project1" sx={{ backgroundColor: 'lightgray', borderRadius: 10, padding: 1 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    System Analysis
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Jan 2021 – Apr 2021
                                </Typography>
                                <Typography variant="body2">
                                    <ListItem><ListItemText secondary="Took on role as Project Manager, duties include developing a project plan, managing deliverables, led and manage the project team, established project schedule, and assigned tasks to project team members" /></ListItem>
                                    <ListItem><ListItemText secondary="Identified project definition, problem, objectives, and constraints" /></ListItem>
                                    <ListItem><ListItemText secondary="Created a Use Case Diagram to identify the functional requirements, features, and interactions between the user and the system" /></ListItem>
                                    <ListItem><ListItemText secondary="Led an interview with a stakeholder to gather requirements about their system, their current database, and what their desirable solutions are" /></ListItem>
                                    <ListItem><ListItemText secondary="Developed Use Case Narratives to identify opportunities for improvement of the current system" /></ListItem>
                                    <ListItem><ListItemText secondary="Conducted a feasibility analysis (operational, technical, economiv) on 3 alternative solutions and provided a recommendation to the stakeholder" /></ListItem>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <Card className="project1" sx={{ backgroundColor: 'lightcyan', borderRadius: 10, padding: 1 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Avenger Collection
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Sep 2020 – Dec 2020
                                </Typography>
                                <Typography variant="body2">
                                    <ListItem><ListItemText secondary="Utilized different data structures, such as arrays, linked lists, binary search trees, and hash tables that can read an input file" /></ListItem>
                                    <ListItem><ListItemText secondary="Sorted the Avengers mentioned into different lists based on when they were mentioned, alphabetically, and which Avenger was most favorable and least favorable depending on its frequency" /></ListItem>
                                    <ListItem><ListItemText secondary="Comprehensive knowledge on object - oriented design (OOD) that involves abstraction, encapsulation, and inheritance" /></ListItem>
                                    <ListItem><ListItemText secondary="Ability to break down complex problems into smaller incremental tasks to maintain continuous progress towards the target completion date" /></ListItem>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default SchoolProjects