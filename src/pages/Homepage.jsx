import { Box, Grid } from '@mui/material';
import ImageSlider from '../components/ImageSlider';
import Layout from '../components/Layout';
import ClientGrid from '../components/ClientGrid';
import Categories from '../components/Categories';
import { sliderList } from '../utils';
import map from './../assets/img/map.jpg'
import LandingPage from './landing-page/LandingPage.jsx';

const Homepage = () => {

  return (
    // <Layout>
    //   <Box>
    //     <ImageSlider
    //       sliderList={sliderList}
    //       id='slider'
    //       className='main-slider'
    //     />
    //     <Categories />
    //     <Box >
    //       <Grid item xs={12} md={12}>
    //         <h2><span className='common-title'>Our Worldwide Presence</span></h2>
    //       </Grid>
    //       <img src={map} alt="map" style={{ width: "50vw",maxHeight:"300px" }} />
    //     </Box>
    //     <ClientGrid />
    //   </Box >
    // </Layout>
    <LandingPage />
  );
}
export default Homepage;