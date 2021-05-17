import React from 'react';
// import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Searcher from './searcher';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#007bff",
        color: "black",
        fontWeight: "fontWeightBold"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    headings: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));


function Spotter() {
    const classes = useStyles();

    return (
        <div>

            <Typography align="center" variant="h5" className={classes.headings}>A tool to help you track down COVID-19 vaccine appointment openings at health centres near you.</Typography>

            <Searcher />

        </div>
    );
}

export default Spotter;