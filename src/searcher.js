import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CallHandler from './CallHandler'
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
		const [response,setResponse]=useState({sessions:[]});
		const [PINerror,setPINerror]=useState('');

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
				let today = new Date();
				let dd = String(today.getDate()).padStart(2, '0');
				let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				let yyyy = today.getFullYear();

				today = `${dd}/${mm}/${yyyy}`;
				CallHandler.findCenterByPIN(pincode,today).then((res)=>{
					setResponse(res);
				}).catch((err) => {	
						err.then(e=>{
							setPINerror(e	.error);
						})
				});
;
       // handleClosed();
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
										error={PINerror !== ''}
  									helperText={PINerror === '' ? '' : PINerror}
                    onChange={(e) => {
											setPINerror('');
											setResponse({sessions:[]});
											setPincode(e.target.value)}
										}
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
						<div>	
							{response.sessions.map((val,idx)=>{
								 return (<ul>
									 <li>{val.name}-{val.center_id}</li>
									</ul>)
							})}
						</div>
        </div>
    );
};

export default Searcher;
