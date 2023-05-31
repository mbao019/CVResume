import React from 'react';
import '../App.css';
import Skills from './skills';

import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import nursingLogo from '../images/nursing.jpg';
import bcisLogo from '../images/bcis.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';




function Education() {

    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        color: 'royalblue',
        ...theme.typography.body1,
        '& [role="separator"]': {
          margin: theme.spacing(5, 10),
        },
    }));

    
    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
        },
    }));

    const bcis = (
        <div>
            <Typography variant="h6" component="div" sx={{color:'green'}}>
                Bachelor of Computer Information System
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 'small'}} color="text.secondary">
                <p>Sept 2019 - Dec 2022</p>
            </Typography>
            <ListItem sx={{color:'goldenrod'}}><ListItemText primary="Mount Royal University"/></ListItem>   
            <ListItem><ListItemText secondary="GPA 3.6"/></ListItem>   
            <ListItem><ListItemText secondary="Dean’s Honor Roll (Fall 2019 - Winter 2022)"/></ListItem>   
            <ListItem><ListItemText secondary="Jason Lang’s Scholarship (2020 - 2022)"/></ListItem>  
        </div>
    );

    const nursing = (
        <div>
            <Typography variant="h6" component="div" sx={{color:'green'}}>
                Bachelor of Nursing
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 'small' }} color="text.secondary">
                <p>Sept 2014 - Jun 2018</p>
            </Typography>
            <ListItem sx={{color:'goldenrod'}}><ListItemText primary="Mount Royal University"/></ListItem>   
            <ListItem><ListItemText secondary="GPA 3.4"/></ListItem>   
        </div>
    );

    return (
        <div className='educationContainer'>

            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    '& svg': {
                    m: 1.5,
                    },
                    '& hr': {
                    mx: 0.5,
                    },
                }}
            >
                <Skills />
                
                <Root>
                    <Grid item xs className="topgrid">
                        <Card sx={{width: 500}}>
                        <CardMedia
                            sx={{ height: 200}}
                            image={bcisLogo}
                            title="computer"
                        />
                        <CardContent>
                            <Typography>{bcis}</Typography>
                        </CardContent>
                        </Card>
                    </Grid>

                    <Divider sx={{color:'blue', padding: 1}}>EDUCATION</Divider>

                    <Grid item xs className="botgrid">
                    <Card sx={{width: 500}}>
                        <CardMedia
                            sx={{ height: 200}}
                            image={nursingLogo}
                            title="computer"
                        />
                        <CardContent>
                            <Typography>{nursing}</Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                </Root>
            </Box>

        </div>
    )
}

export default Education