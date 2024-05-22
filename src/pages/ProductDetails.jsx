import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import HomeIcon from '@mui/icons-material/Home';
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import products, { getProductById } from '../utils';
import { StarBorder } from '@mui/icons-material';
import FeatureTab from '../components/FeatureTab';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ImageSlider from '../components/ImageSlider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuoteForm from '../components/QuoteForm';

function ProductDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const lastPath = location.pathname.split('/')
    const [quoteForm, setQuoteForm] = useState(false)
    const getIdByURL = lastPath[lastPath.length - 1]
    const currentProductDetails = getProductById(getIdByURL)
    function handleClick(url) {
        navigate(url)
    }

    const breadcrumbs = [
        <div underline="hover" href="/" onClick={() => handleClick('/')}>
            <HomeIcon sx={{ height: "14px" }} /> Home
        </div>,
        <div underline="hover" href="/" onClick={() => handleClick('/products')}>
            Products
        </div>,
        <div className='blue-text'>
            {currentProductDetails.pageTitle}
        </div>,
    ];

    const QuoteButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        border: '1px solid',
        borderRadius: 0,
        lineHeight: 1.5,
        backgroundColor: '#007ff0',
        color: '#fff',
        borderColor: '#fff',
        display: 'inline-flex',
        float: 'left',
        margin: '6px',
        padding: '12px',
        fontSize: '20px',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#fff',
            color: '#007ff0',
            borderColor: '#007ff0',
            boxShadow: 'none',
        },
    });
    return (
        <Layout>
            <div className='products-page'>
                <div className='breadcrumb-row blue-bg'>
                    <Breadcrumbs separator="|" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </div>
                {quoteForm && <QuoteForm dialogueState={quoteForm} />}
                <Box sx={{ p: { xs: 2, sm: 2, md: 4 } }}><Grid container>
                    <Grid item direction={'row'} xs={12} md={6} justifyContent={'center'} justifyItems={'center'} justifySelf={'center'} sx={{ m: 'auto' }}>
                        <ImageSlider sliderList={currentProductDetails.productImage}
                            id='productSlider'
                            className='product-slider'
                            showIndicator={false}
                        />
                        {/* <img src={currentProductDetails.additionalSection.image} alt={currentProductDetails.pageTitle} width={200} /> */}
                    </Grid>
                    <Grid item xs={12} md={6} className='product-details-wrapper' >
                        <Box sx={{ width: { md: '30vw' } , px : '1.5rem'}}>
                            <p className='product-details-title' >{currentProductDetails.pageTitle}</p>
                            <p className='common-description'>{currentProductDetails.summary}</p>
                            <List>
                                {currentProductDetails?.features.map((item) => (
                                    <ListItem key={item.navTitle} disablePadding className='blue-bg' style={{ padding: '0.2rem', margin: '0.2rem' }}>
                                        &nbsp;&nbsp;   <LabelOutlinedIcon sx={{ color: '#007ff0' }} /> &nbsp;&nbsp; <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <QuoteButton onClick={() => setQuoteForm(!quoteForm)}>Request Quote</QuoteButton>
                            <QuoteButton onClick={() => navigate(navs.path)} startIcon={<ShoppingCartIcon />}>Buy Now!!</QuoteButton>

                        </Box>
                    </Grid>
                </Grid></Box>
                <Box sx={{ width: "100%" }}><FeatureTab currentProductDetails={currentProductDetails} /></Box>
                {/* <Box sx={{ p: { xs: 4, sm: 2, md: 4 }, px: { xs: 10, sm: 0, md: 20 } }}><Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    {currentProductDetails.productImage?.map((product) => <Grid item xs={12} sm={2} md={3}> <Card sx={{ p: 2 }} className='media-wrapper' >
                        <CardMedia
                            className='media'
                            image={product}
                            title={product}
                        />
                    </Card></Grid>)}

                </Grid>
                </Box> */}

            </div>
        </Layout>

    )
}

export default ProductDetails