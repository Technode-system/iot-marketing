import { Box, Card, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import Homepage from '../pages/Homepage'
import LogoHeader from './LogoHeader'
import Navbar from './Navbar'
import Carousel from 'react-material-ui-carousel';
import slider2 from './../assets/img/slider2.jpg'
import slider1 from './../assets/img/slider1.jpg'
import Footer from './Footer'
import './../App.css'
import Phone from '@mui/icons-material/Phone'
import Mail from '@mui/icons-material/Mail'

function Layout({ children }) {
    window.onscroll = function () { myFunction() };

    var tab = document.getElementById("myTabs");

    function myFunction() {
        if (window?.pageYOffset > 960) {
            tab?.classList.add("sticky");
        } else {
            tab?.classList.remove("sticky");
        }
    }

    return (
        <div >
            <Box>
                <Navbar />
                <LogoHeader />
                <div className='layout-wrapper'>{children}</div>
                {/* <Footer /> */}
                {/* <Box  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <div className="amg-floating-contacts">
                        <div className="amg-floating-contact-wrap amg-green">
                            <div className="amg-floating-icon">
                                <Phone sx={{ color: '#fff' }} />
                            </div>
                            <div className="amg-floating-link amg-floating-phone">
                                <a className="amg-nav-item"
                                    href="sms:305-912-5055">Phone</a>
                                <a className="amg-nav-item"
                                    href="sms:305-912-5055">Email</a>
                            </div>
                        </div>
                        <div className="amg-floating-contact-wrap amg-orange">
                            <div className="amg-floating-icon">
                                <Mail sx={{ color: '#fff' }} />
                            </div>
                            <div className="amg-floating-link amg-floating-email">
                                <form>
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" />
                                    <label for="email">Email:</label>
                                    <input type="text" id="email" />
                                    <label for="message">Message:</label>
                                    <input type="text" id="message" />
                                    <button className="amg-button" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box> */}
                <Footer />
            </Box >
        </div>
    )
}

export default Layout