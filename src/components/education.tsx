import React from 'react';
import '../App.css';

import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import nursingLogo from '../images/nursing.jpg';
import bcisLogo from '../images/bcis.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';




const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    color: 'royalblue',
    ...theme.typography.body1,
    '& [role="separator"]': {
      margin: theme.spacing(5, 5),
    },
}));

function Education() {

    const bcis = (
        <div>
            <Typography variant="h6" component="div">Bachelor of Computer Information System</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"><p>Sept 2019 - Dec 2022</p></Typography>
            <Typography variant="body2">
                <p>Mount Royal University
                <ul>
                    <li>GPA 3.6</li>
                    <li>Dean’s Honor Roll (Fall 2019 - Winter 2022)</li>
                    <li>Jason Lang’s Scholarship (2020 - 2022)</li>
                </ul>
                </p>
            </Typography>
           
        </div>
    );

    const nursing = (
        <div>
            <Typography variant="h6" component="div">Bachelor of Nursing</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"><p>Sept 2014 - Jun 2018</p></Typography>
            <Typography variant="body2">
                <p>Mount Royal University
                <ul>
                    <li>GPA 3.4</li>
                </ul>
                </p>
            </Typography>
        </div>
    );

    return (
        <div className='educationContainer'>

            <Grid container>

                <Grid item xs className="leftgrid">
                    <Card>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={bcisLogo}
                            title="computer"
                        />
                        <CardContent>
                            <Typography>{bcis}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Divider orientation="vertical" flexItem>EDUCATION</Divider>
                

                <Grid item xs className="rightgrid">
                    <Card>

                        <CardMedia
                            sx={{ height: 200 }}
                            image={nursingLogo}
                            title="nursing"
                        />
                        <CardContent>
                            <Typography>{nursing}</Typography>    
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Education