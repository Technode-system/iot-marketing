import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import HomeIcon from '@mui/icons-material/Home';
import { Box, Breadcrumbs, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import products from '../utils';
import main_banner from './../assets/img/products/main_banner.jpg'

function Products() {
    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        navigate('/')
    }

    const breadcrumbs = [
        <div underline="hover" href="/" onClick={handleClick}>
            <HomeIcon sx={{ height: "14px" }} /> Home
        </div>,
        <div className='blue-text'>
            Products
        </div>,
    ];

    return (
        <Layout>
            <div className='products-page'>
                <Grid container><Grid item xs><img src={main_banner} className='product-banner' /></Grid></Grid>
                <div className='breadcrumb-row blue-bg'>
                    <Breadcrumbs separator="|" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </div>
                <div className='description'>
                    <h2>Products</h2>
                    <span>Technode is involved in manufacturing of GSM and WiFi Enabled Wireless Devices. We have following range of products.</span>
                    <ol start={1}>
                        <li style={{ paddingBottom: "0.5rem" }}>GSM Based SMS Alert Devices</li>
                        <li style={{ paddingBottom: "0.5rem" }}>4G / WiFi MODBUS IOT Gateways</li>
                        <li style={{ paddingBottom: "0.5rem" }}>Industrial RS485 Sensors </li>
                        <li style={{ paddingBottom: "0.5rem" }}>Power Eletcronics Instruments & Sensors</li>

                    </ol>
                </div>
                <Box sx={{ p: { xs: 4, sm: 2, md: 4 }, px: { xs: 10, sm: 0, md: 0 } }}><Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {products?.map((product, index) => <Grid key={index} item xs={12} sm={12} md={3}> <Card className='media-wrapper ' sx={{ my: { xs: 2 } }} onClick={() => navigate(`/products/${product.id}`)} >
                        <img
                            className='media'
                            src={product.additionalSection.image}
                        />
                        <p><Typography variant component="div" className='card-title'>
                            {product.pageTitle}
                        </Typography></p>
                    </Card></Grid>)}

                </Grid>
                </Box>

            </div>
        </Layout>

    )
}

export default Products