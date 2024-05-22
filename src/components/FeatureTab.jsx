import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            // hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {/* {value === index && ( */}
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            {/* )} */}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

export default function FeatureTab({ currentProductDetails }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const myRef = React.useRef(null)

    const executeScroll = () => myRef?.current?.scrollIntoView({ behavior: 'smooth' })


    const handleChange = (event, newValue) => {

        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        console.log("executeScroll called")
        executeScroll()
        setValue(index);
    };
    const handleDownload = (pdfUrl) => {
        // Replace with your preferred method to open a PDF, e.g., window.open
        window.open(pdfUrl, '_blank');
    };

    
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                position: 'relative',
                padding: '2.5% 0%',
                minHeight: 200,
            }}
        >
            <Grid sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                <div className='tab-nav' id="myTabs">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#fff"
                            }
                        }}
                        textColor="#fff"
                        sx={{ mx: { md: 20 }, px: { md: 5 } }}
                        centered
                    >
                        <Tab sx={{ px: { md: 10 } }} label="Description" {...a11yProps(0)} href='#description' onClick={() => handleChangeIndex(0)} />
                        <Tab sx={{ px: { md: 10 } }} label="Features" {...a11yProps(1)} href='#features' onClick={() => handleChangeIndex(1)} />
                        <Tab sx={{ px: { md: 10 } }} label="Specification" {...a11yProps(2)} href='#specification' onClick={() => handleChangeIndex(2)} />
                        <Tab sx={{ px: { md: 10 } }} label="Applications" {...a11yProps(3)} href='#applications' onClick={() => handleChangeIndex(3)} />
                        <Tab sx={{ px: { md: 10 } }} label="Downloads" {...a11yProps(4)} href='#downloads' onClick={() => handleChangeIndex(4)} />
                    </Tabs>
                    {/* </AppBar> */}
                </div>
            </Grid>

            {/* <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                className={value == 1 && 'blue-bg'}
            > */}
            <Box>
                <TabPanel value={value} index={0} dir={theme.direction} id='description' ref={myRef}>
                    <div className='description'>
                        <p className='common-title' >PRODUCT DESCRIPTION</p>
                        <span>{currentProductDetails.applications.content}</span>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} id='features' ref={myRef} className={'blue-bg'}>
                    <Box sx={{ px: 4 }} className="description">
                        <p className='common-title'>Features</p>
                        {currentProductDetails?.features?.map((feature) => <div ><ListItemIcon>
                            &nbsp;&nbsp;   <TaskAltOutlinedIcon sx={{ color: '#007ff0' }} /> &nbsp;&nbsp; <ListItemText primary={feature} />
                        </ListItemIcon></div>)}
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction} id='specification' ref={myRef}>
                    <Box sx={{ px: { xs: 1, md: 20 } }} >
                        <List >
                            <p className='common-title'>Technical Specifications</p>
                            {currentProductDetails?.specifications.map((item) => (
                                <ListItem key={item.id} disablePadding className='blue-bg' style={{ padding: '1rem', margin: '1rem 0.5rem' }}>
                                    &nbsp;&nbsp;   <ListItemText primary={item.key} sx={{ color: '#007ff0' }} /> &nbsp;&nbsp; <ListItemText primary={item.value} sx={{ textAlign: { xs: 'end', sm: 'auto' } }} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction} id='applications' ref={myRef}>
                    <Box sx={{ px: 4 }} className="description">
                        <p className='common-title'>Applications</p>
                        {currentProductDetails?.applications?.content?.map((feature) => <div ><ListItemIcon>
                            &nbsp;&nbsp;   <TaskAltOutlinedIcon sx={{ color: '#007ff0' }} /> &nbsp;&nbsp; <ListItemText primary={feature} />
                        </ListItemIcon></div>)}
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction} id='downloads' ref={myRef}>
                    <Box sx={{ px: { xs: 1, md: 20 } }} >
                        <List >
                            <p className='common-title'>Downloads</p>
                            {currentProductDetails?.downloads.map((item) => (
                                <ListItem key={item.id} disablePadding className='blue-bg' style={{ padding: '1rem', margin: '1rem 0.5rem' }}>
                                    &nbsp;&nbsp;   <ListItemText primary={item.name} sx={{ color: '#007ff0' }} /> &nbsp;&nbsp; <Button variant="contained" startIcon={<FileDownloadOutlinedIcon />} onClick={() => handleDownload(item.pdfUrl)}>Download</Button>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </TabPanel>
            </Box>
            {/* </SwipeableViews> */}
        </Box>
    );
}