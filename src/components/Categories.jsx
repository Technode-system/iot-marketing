import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import { categories } from '../utils';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';

export default function Categories() {
    const [spacing, setSpacing] = React.useState(8);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };


    return (
        <Grid sx={{ flexGrow: 1, p: 5 }} container className='blue-bg'>
            <Grid item xs={12} >
                <Grid container justifyContent="center" spacing={8}>
                    {categories.map((value) => (
                        <Grid key={value.title} item>
                            <Paper
                                sx={{
                                    height: 300,
                                    width: 250,
                                    p: 2,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                                className='category-card'
                            >
                                <img src={value.svg} alt={value.label} className='blue-bg' style={{ width: '100px', float: 'left', height:'90px', padding: '0.5rem' }}/>
                                <h2 className='blue-label'>{value.label}</h2>
                                <p className='common-description'>{value.description}</p>
                                <Divider />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}