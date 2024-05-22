import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import products, { BootstrapButton, navItems } from '../utils';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import footer_logo from './../assets/img/footer_logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.css'

function Footer() {
    const navigate = useNavigate()
    return (<>
        <footer className='footer'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid >
                    <Grid container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start" columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={6}>
                            <Link to="/">
                                <img
                                    className="logo"
                                    src={footer_logo}
                                    alt="Logo"
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={6} ><Box>
                            {navItems.map((item) => (
                                <BootstrapButton key={item} sx={{ textAlign: 'center', color: '#373737' }} variant='text' onClick={() => navigate(item.path)}>
                                    <img src={item.svg} alt={item.navTitle} className='svg-spacing' /> {item.navTitle}
                                </BootstrapButton>
                            ))}
                        </Box></Grid>
                    </Grid>
                    <hr />
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={3}><h2 >Get In Touch</h2>
                            <Grid>
                                <Grid xs item justifyContent="flex-start"
                                    alignItems="flex-start">
                                    <div className='address' >

                                        <h2 className="title">Our Workspace </h2>
                                        <div >
                                            <span>
                                                Address:
                                            </span>
                                            <span style={{ textAlign: 'justify' }}>Mittal Enclave, Shop No.1, Ground Floor, Vrindavan Shopping Centre<br /> B-3, opposite to Citizen Credit Co-operative Bank,<br /> Naigaon East, Mumbai, Maharashtra 401208</span>
                                        </div>
                                        <div >
                                            <span>
                                                <PhoneIcon sx={{ height: "14px" }} />
                                            </span>
                                            <span>+91 8208087079</span>
                                        </div>
                                        <div>
                                            <span>
                                                <MailIcon sx={{ height: "14px" }} />
                                            </span>
                                            <span >info@technode.co.in</span>
                                        </div>
                                        <div>
                                            <ul className='social-icons'>
                                                <li><FacebookIcon /></li>
                                                <li><LinkedInIcon /></li>
                                                <li><InstagramIcon /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Grid>

                            </Grid></Grid>
                        <Grid item xs={9}
                        ><h2 >Quick Links</h2>
                            <Grid container>
                                <Grid xs={12} md={4}>
                                    <h4>Site Map</h4>
                                    <Link className="links" to="/"><p>Home</p></Link>
                                </Grid>
                                <Grid xs={12} md={4}> <h4>Products</h4>
                                    {products?.map((eachProduct) =>
                                        <Link className='links' to={`/products/${eachProduct.id}`}>
                                            <p>{eachProduct?.pageTitle}</p>
                                        </Link>
                                    )}
                                </Grid>
                                <Grid xs={12} md={4}><h4>Terms</h4>
                                    <div className="text-gray-300 font-sans">
                                        <p>
                                            {/* <a href="/terms" className="hover:text-orange-500 transition duration-300"> */}
                                            <Link className='links' to="/terms" >Shipping & Delivery Policy</Link>
                                            {/* </a> */}
                                        </p>
                                        <p>
                                            {/* <a href="/termsandconditions" className="hover:text-orange-500 transition duration-300"> */}
                                            <Link className='links' to="/termsandconditions" >Terms and Conditions</Link>
                                            {/* </a> */}
                                        </p>
                                        <p>
                                            {/* <a href="/privacypolicy" className="hover:text-orange-500 transition duration-300"> */}
                                            <Link className='links' to="/privacypolicy" >Privacy policy</Link>
                                            {/* </a> */}
                                        </p>
                                        <p>
                                            {/* <a href="/refundpolicy" className="hover:text-orange-500 transition duration-300"> */}
                                            <Link className='links' to="/refundpolicy" >Refund and Cancellation policy</Link>
                                            {/* </a> */}
                                        </p>

                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Box>


        </footer>
        <div className="copyright">
            <p style={{ fontSize: "smaller" }}>2024 © All Rights Reserved</p>
        </div></>
    )
}

export default Footer