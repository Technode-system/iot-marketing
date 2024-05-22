import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import products from '../data/product';
import { Box, Button, styled } from '@mui/material';
import { navList } from '../utils';
import './Navbar.css';
import QuoteForm from './QuoteForm';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState(false)
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const LoginButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    border: '1px solid',
    borderRadius: 0,
    lineHeight: 1.5,
    backgroundColor: '#fff',
    color: '#007ff0',
    borderColor: '#fff',
    margin: '6px',
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
      backgroundColor: '#007ff0',
      color: '#fff',
      borderColor: '##fff',
      boxShadow: 'none',
    },
  });
  const QuoteButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    border: '1px solid',
    borderRadius: 0,
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    color: '#fff',
    borderColor: '#fff',
    margin: '6px',
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
      borderColor: '#fff',
      boxShadow: 'none',
    },
  });

  return (<>{quoteForm && <QuoteForm dialogueState={quoteForm} />}
    <Box sx={{ display: { xs: 'none', md: "block" } }} ><nav className={`navbar`}>
      <div className="">
        <ul>
          {navList?.map((navs) => {
            if (navs.primaryButton) {
              return <LoginButton sx={{ textAlign: 'center' }} variant='text' onClick={() => navigate(navs.path)}>
                {navs.navTitle}
              </LoginButton>
            } else if (navs.secondaryButton) {
              return <QuoteButton onClick={() => setQuoteForm(!quoteForm)} sx={{ textAlign: 'center' }} variant='text' >{navs.navTitle}</QuoteButton>
            }
            else { return <li onClick={() => navigate(navs.path)}>{navs.navTitle}</li> }

          })}
        </ul>
      </div>
    </nav></Box></>


  );
};

export default Navbar;
