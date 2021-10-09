import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import Logo from './../../assets/hindi_indie-removebg-preview.png';

import useStyles from './styles.js';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;