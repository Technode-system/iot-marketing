import React from 'react'
import { Box, Button, Card, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import './../App.css'
import { useNavigate } from 'react-router-dom';

function ImageSlider({ sliderList, id, className, showIndicator = true }) {
    const navigate = useNavigate();
    return (
        <div id={id}>
            <Box >
                <Carousel
                    indicatorIconButtonProps={
                        //     showIndicator ? {
                        //     style: {
                        //         position: 'relative',
                        //         bottom: '60px',
                        //         zIndex: 1,
                        //     },
                        // } : {
                        {
                            style: {
                                position: 'relative',
                                display: 'none',
                            }
                        }
                    }
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#007ff0',
                        },
                    }}

                >
                    {
                        sliderList.map((item, i) => {
                            const imgURL = item.img_url ? item.img_url : item
                            return <Card sx={{ backgroundColor: 'transparent', boxShadow: "none", border: "0" }}>

                                <div style={{ position: "relative" }}>
                                    <Box sx={{ width: "100%" }}>
                                        <img
                                            src={imgURL}
                                            alt={imgURL}
                                            className={className}
                                        />
                                    </Box>

                                    <Box sx={{ position: "relative", bottom: "40%", left: "50%", textAlign: "left", padding: "2%", transform: "translateX(-50%)" }} >
                                        <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} sx={{ fontSize: { md: '4rem' } }}>
                                            {item.label}
                                        </Typography>
                                        {/* <Typography variant="body2" color='black' ><ul>{item.description?.map((listItem) => <li>{listItem}</li>)}</ul>
                                        </Typography> */}
                                        {item.buttonText && <Button variant='outlined' sx={{ float: "right", bottom: { xs: '1.6rem', md: '4.5rem' , fontSize: '1.2rem'} }} onClick={() => navigate(item.detailsPageUrl)}>{item.buttonText}</Button>}
                                        <List sx={{ ml: { md: '5rem' } }}>
                                            {item && item.description && item.description?.map((item, index) => {
                                                return <ListItem key={item} disablePadding style={{ padding: '0.2rem', margin: '0.2rem' }}>
                                                    <LabelOutlinedIcon sx={{ color: '#007ff0' }} /> &nbsp;&nbsp; <ListItemText primary={item} />
                                                </ListItem>
                                            })}
                                        </List>
                                    </Box>

                                </div>

                            </Card>
                        }
                        )
                    }
                </Carousel>

            </Box>
        </div>
    )
}

export default ImageSlider