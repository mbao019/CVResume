import React from 'react'
import '../App.css'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import reading from '../images/reading.jpg'
import travelling from '../images/travelling.jpg'
import food from '../images/food.jpg'
import gaming from '../images/gaming.jpg'
import movies from '../images/movies.jpg'
import family from '../images/family.jpg'
import music from '../images/music.jpg'
import badminton from '../images/badminton.jpg'
import biking from '../images/biking.jpg'
import swimming from '../images/swimming.jpg'
import Box from '@mui/material/Box';


function Hobbies() {

  const itemData = [
    {
      img: reading,
      title: 'Reading',
    },
    {
      img: music,
      title: 'Music',
    },
    {
      img: badminton,
      title: 'Sports',
    },
    {
      img: movies,
      title: 'Movies & Anime',
    },
    {
      img: family,
      title: 'Family & Friends',
    },
    {
      img: travelling,
      title: 'Travelling',
    },
    {
      img: gaming,
      title: 'Gaming',
    },
    {
      img: biking,
      title: 'Biking',
    },
    {
      img: swimming,
      title: 'Swimming',
    },
    {
      img: food,
      title: 'Food',
    },
  ];

  return (

    <div className='hobbiesContainer'>

      <h1 id='hobbies'>Hobbies & Interests!</h1>

      <Box className="hobbiesList">

        <ImageList sx={{}} variant="masonry" cols={5} gap={8}>
          {itemData.map((item) => (
            <ImageListItem>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

    </div>
  )
}

export default Hobbies