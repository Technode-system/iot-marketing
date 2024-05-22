import { Box, Button, Grid, List, ListItem, ListItemText, Paper, styled } from '@mui/material';
import Layout from '../components/Layout';

import { Divider } from '@mui/material';
import products from '../utils';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import './../App.css'
import { useNavigate } from 'react-router-dom';

const Store = () => {
    const navigate = useNavigate();
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
            <Box>
                <Grid sx={{ flexGrow: 1, p: 5 }} container>
                    <Grid item xs={12} md={12} >
                        <Box sx={{ textAlign: 'left', py: 5, px: { md: 16 } }}>
                            <h1 className='blue-text'>Welcome to Technode Store!</h1>
                            <span className='common-description'>This is our official E-commerce Store of Technode. You can buy all our products at authentic rates from this store. please read all the terms and conditions
                                before placing your order. In case of any doubt related to product please see the product section and download the Manual & Brochure. In case of any issue while
                                placing order online please contact us at info@technode.co.in
                            </span>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container justifyContent="center" >
                            {/* {products.map((product) => (
                                <Grid key={product.pageTitle} item>
                                    <Paper
                                        sx={{
                                            width: 250,
                                            p: 2,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    // className='category-card'
                                    >
                                       
                                        <img
                                            className='media'
                                            src={product.additionalSection.image}
                                        // style={{ width: 'auto', float: 'left', height: '90px' }}
                                        />
                                        <h2 className='blue-label'>{product.pageTitle}</h2>
                                      
                                        <ul><li>{product.pageTitle}</li></ul>
                                        <Divider />
                                        <QuoteButton variant='text' onClick={() => navigate(`/products/${product.id}`)}>View Details</QuoteButton>
                                       
                                    </Paper>
                                </Grid>
                            ))} */}
                            <h1>Coming Soon...</h1>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        </Layout>
    );
}
export default Store;