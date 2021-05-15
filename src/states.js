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


function States() {
    const classes = useStyles();

    return (
        <div>

            <Typography align="center" variant="h5" className={classes.headings}>STATES</Typography>

            <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.paper}>
                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Andhra Pradesh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Arunachal Pradesh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Assam</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Bihar</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Chhattisgarh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Goa</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Gujarat</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Haryana</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Himachal Pradesh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Jharkhand</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Karnataka</Button>
                </Grid>
                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Kerala</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Madhya Pradesh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Maharashtra</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Manipur</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Meghalaya</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Mizoram</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Nagaland</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Odisha</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Punjab</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Rajasthan</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Sikkim</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Tamil Nadu</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Telangana</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Tripura</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Uttar Pradesh</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>Uttarakhand</Button>
                </Grid>

                <Grid item md={3}>
                    <Button fullWidth variant="contained" size="large" style={{ background: "#f8f9fa", border: "#000" }}>West Bengal</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default States;
