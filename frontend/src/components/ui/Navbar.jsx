import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    const HandleHomepage = () => {
        navigate("/")
    }
    const HandleEmployeeform = () => {
        navigate("/employee")

    }
    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={HandleHomepage}>HomePage</Button>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={HandleEmployeeform}>Employee Forms</Button>
                    </Stack>


                </Toolbar>
            </AppBar>






        </div>
    )
}

export default Navbar
