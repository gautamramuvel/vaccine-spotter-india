import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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


function UnionT() {
    const classes = useStyles();

    return (
        <div>
            <Typography align="center" variant="h5" className={classes.headings}>UTs</Typography>

            <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.paper}>
                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Andaman and Nicobar Islands</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Chandigarh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Daman and Diu</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Delhi</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Jammu and Kashmir</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Ladakh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Lakshadweep</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Puducherry</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default UnionT;