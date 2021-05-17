import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),

        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "300px",
        },
        "& .MuiButtonBase-root": {
            margin: theme.spacing(2),
        },
    },
}));

const Searcher = ({ handleClosed }) => {
    const classes = useStyles();
    // create state variables for each input
    const [pincode, setPincode] = useState("");
    const [distance, setdistance] = useState("Any Distance");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setdistance(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pincode, distance);
        handleClosed();
    };

    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit}>
                {/* <InputLabel>Bootstrap</InputLabel> */}
                <TextField
                    style={{ width: '100vw' }}
                    label="Zip"
                    variant="outlined"
                    required
                    onChange={(e) => setPincode(e.target.value)}
                />

                {/* <InputLabel id="demo-controlled-open-select-label">Distance</InputLabel> */}

                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={distance}
                    onChange={handleChange}
                    width="true"
                    variant="outlined"
                >
                    <MenuItem value={5}>5 Miles</MenuItem>
                    <MenuItem value={10}>10 Miles</MenuItem>
                    <MenuItem value={25}>25 Miles</MenuItem>
                    <MenuItem value={50}>50 Miles</MenuItem>
                    <MenuItem value={100}>100 Miles</MenuItem>
                </Select>

                <Button type="submit" variant="contained" style={{ background: "#007bff", color: "white" }}>Signup</Button>
            </form>
        </div>
    );
};

export default Searcher;
