import React from 'react'
import { Box, Grid, ImageListItem, ThemeProvider, createTheme, imageListItemClasses } from '@mui/material'
import { styled } from '@mui/material/styles';
import logo1 from './../assets/img/clients_icons/1.png'
import logo2 from './../assets/img/clients_icons/2.jpg'
import logo3 from './../assets/img/clients_icons/3.png'
import logo4 from './../assets/img/clients_icons/4.jpg'
import logo5 from './../assets/img/clients_icons/5.png'
import logo6 from './../assets/img/clients_icons/6.jpg'
import logo7 from './../assets/img/clients_icons/7.jpg'
import logo8 from './../assets/img/clients_icons/8.png'
import logo9 from './../assets/img/clients_icons/9.png'
import logo10 from './../assets/img/clients_icons/10.jpg'
import logo11 from './../assets/img/clients_icons/11.svg'
import logo12 from './../assets/img/clients_icons/12.jpg'
import logo13 from './../assets/img/clients_icons/13.svg'
import logo14 from './../assets/img/clients_icons/14.png'
import logo15 from './../assets/img/clients_icons/15.jpg'
import logo16 from './../assets/img/clients_icons/16.svg'

import '../App.css'

let clientLogos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    { logo: logo7 },
    { logo: logo8 },
    { logo: logo9 },
    { logo: logo10 },
    { logo: logo11 },
    { logo: logo12 },
    { logo: logo13 },
    { logo: logo14 },
    { logo: logo15 },
    { logo: logo16 },
];

const ImageGalleryList = styled('ul')(({ theme }) => ({
    display: 'grid',
    // padding: 100,
    margin: theme.spacing(0, 4),
    gap: 8,
    [theme.breakpoints.up('xs')]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(4, 1fr)'
    },
}));

export default function ClientGrid({ imageData }) {
    return (
        <Box className='blue-bg' sx={{display: 'grid' , justifyContent: 'center', py : 4}}>
            <Grid container direction='row' >
                <Grid item xs={12} md={12}>
                    <h2><span className='common-title'>Our Esteemed Clients</span></h2>
                </Grid>
                <Grid item xs={12} md={12}>

                    <ImageGalleryList className='client-grid-wrapper'>
                        {clientLogos.map((item) => (
                            <ImageListItem key={item.logo}>
                                <img
                                    src={`${item.logo}`}
                                    alt={item.logo}
                                    loading="lazy"
                                     className='client-logos'
                                    style={{ objectFit: 'contain', maxHeight: '100px', margin: '0% 0vw', padding: '0% 5%', width : '160px' }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageGalleryList>
                </Grid>
            </Grid>
        </Box >
    );
}