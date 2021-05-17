import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as MySvg } from './virus.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#007bff",
        color: "white",
        fontWeight: "fontWeightBold",
        width: '100%',
        OverflowX: 'hidden'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));


function NavBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar fullWidth position="sticky" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MySvg height={30} width={30} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Vaccine Spotter India
          </Typography>
                    {/* <Button style={{background: "#f8f9fa"}} href = './spotter.js')}>Check Appointments</Button> */}
                    {/* <Button><Link to="/Spotter">Check Appointments</Link></Button> */}

                    <Button style={{ background: "#f8f9fa" }} href = "/spotter">Check Appointments</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;