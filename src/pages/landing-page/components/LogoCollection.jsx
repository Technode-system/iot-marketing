import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

import logo1 from '../../../assets/img/clients_icons/1.png'
import logo2 from '../../../assets/img/clients_icons/2.jpg'
import logo3 from '../../../assets/img/clients_icons/3.png'
import logo4 from '../../../assets/img/clients_icons/4.jpg'
import logo5 from '../../../assets/img/clients_icons/5.png'
import logo6 from '../../../assets/img/clients_icons/6.jpg'
import logo7 from '../../../assets/img/clients_icons/7.jpg'
import logo8 from '../../../assets/img/clients_icons/8.png'
import logo9 from '../../../assets/img/clients_icons/9.png'
import logo10 from '../../../assets/img/clients_icons/10.jpg'
import logo11 from '../../../assets/img/clients_icons/11.svg'
import logo12 from '../../../assets/img/clients_icons/12.jpg'
import logo13 from '../../../assets/img/clients_icons/13.svg'
import logo14 from '../../../assets/img/clients_icons/14.png'
import logo15 from '../../../assets/img/clients_icons/15.jpg'
import logo16 from '../../../assets/img/clients_icons/16.svg'

// import '../App.css'

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};


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


export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Our Esteemed Clients
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {clientLogos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo.logo}
              alt={`${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
