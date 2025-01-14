import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import ImageSlider from '../../../components/ImageSlider';
import { sliderList } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import homepage from './../../../assets/img/svg/homepage.svg'
import slider_main from './../../../assets/img/slider_main.jpg'
import mainbg from './../../../assets/img/mainbg.png'
import '../../../App.css'

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  // height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
      : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
  outline: '1px solid',
  backgroundImage: `url(${theme.palette.mode === 'light'
      ? '/static/images/templates/templates-images/hero-light.png'
      : '/static/images/templates/templates-images/hero-dark.png'
    })`,
  backgroundSize: 'cover',
  outlineColor:
    theme.palette.mode === 'light'
      ? 'hsla(220, 25%, 80%, 0.5)'
      : 'hsla(210, 100%, 80%, 0.1)',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

export default function Hero() {
  const navigate = useNavigate()
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        // backgroundImage: `url(${mainbg})`,
        background: `#007bff url(${mainbg}) no-repeat scroll center center / cover`,
        backgroundAttachment: 'fixed',
        // height: '624px',
        zIndex: '1',
        position: 'relative',
        // width: '100%',
        // backgroundImage: theme.palette.mode === 'light'
        //     ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
        //     : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        // backgroundRepeat: 'no-repeat',
      })}
    >
        <img src={homepage} className='shape-bottom' width={'100%'} />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          className='intro-label'
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >

            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                // color: (theme) =>
                //   theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                color: "#fff"
              }}
            >
              Embedded Systems & IOT for Industry 4.0
              {/* <Link to='/products' onClick={() => navigate('/products')}>Products</Link>   */}
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="#fff"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            <br />We are expert solution providers for embedded systems, IOT and Linux based Systems.We provide IOT Devices and Solutions for Industrial Automation.
            <br />EMBEDDED | IOT | Automation
          </Typography>
          {/* <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center">
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>*/}
        </Stack>
        <StyledBox id="image"  >
          {/* <ImageSlider
          sliderList={sliderList} */}
          <img src={slider_main} id='slider'className='main-slider' />
          {/* /> */}
        </StyledBox>
      </Container>
    </Box>
  );
}
