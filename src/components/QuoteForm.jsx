import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import header_logo from './../assets/img/header_logo.png'

export default function QuoteForm({ dialogueState }) {
    const [open, setOpen] = React.useState(dialogueState);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className='blue-bg'>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    action:"https://srv1100-files.hstgr.io/23a21bc2d3835689/files/public_html/IOT_dashboard/mail.php",
                    method:"post",
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        $.ajax({
                            type: "POST",
                            url: form.attr("action"),
                            data: formJson.serialize(),
                            success(data) {
                                // setResult(data);
                            },
                        });

                        handleClose();
                    },
                }}
            >
                <DialogTitle><Grid container justifyContent={'center'}><Link to="/">
                    <img
                        className="logo"
                        src={header_logo}
                        alt="Logo"
                    />
                </Link></Grid></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Connect with with us to learn more about our product
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="phone"
                        label="Phone"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="notes"
                        label="Notes"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Get Quote</Button>
                </DialogActions>
            </Dialog>
        </Box >
    );
}