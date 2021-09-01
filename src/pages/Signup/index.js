import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { GiPlanetConquest } from 'react-icons/gi';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { SignupStyle } from './style';

const useStyles = SignupStyle()

export default function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        lname: "",
        email: "",
        password: "",
        desc: ""
    })
    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
     
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        localStorage["users"] =JSON.stringify(user);
        // localStorage.setItem("users" , [... user]) 
        history.push("/login")
    }
    return (
        <Container component="main" maxWidth="xs" style={{ display: "flex" }}>

            <Grid item xs={12} xl={6}>
                <div className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <GiPlanetConquest size={50} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register Now
                    </Typography>
                    <form className={classes.form} >
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname" name="name" variant="outlined" required fullWidth id="firstName"
                                    label="First Name" autoFocus
                                    value={user.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lname"
                                    autoComplete="lname"
                                    value={user.lname}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="desc"
                                    label="Key words about your Destination"
                                    type="text"
                                    rows={4}
                                    id="Desc"
                                    value={user.desc}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>


            </Grid>




        </Container>
    );
}