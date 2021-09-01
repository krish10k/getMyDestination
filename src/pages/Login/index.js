import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Earth from '../../assects/Earth.png';
import { LoginStyle } from './style';

const useStyles = LoginStyle();

export default function Login() {
    const classes = useStyles();
    const History = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const [auth ,setAuth] =useState(false)    // save in store and check for loggedout btn
    const userLogin = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }

        //CHECKING USER IN LOCAL STORAGE ...PASSING NAME IN SESSION STORAGE
        const users = JSON.parse(localStorage["users"]);

        if (user.email === users.email && user.password === users.password) {
            console.log("sucess-login")
            setAuth(true)
            History.push("/")
        }
        else {
            console.log("error-login")
            alert("no user found with this credentials... Please Sign Up!")
            History.push("/signup")
        }

    }

    return (
        <Container component="main" maxWidth="md" style={{ display: "flex-row" }} >
            <div className={classes.paper}>
                <Grid item sm={0} xl={6}  >

                    <img className={classes.pic} src={Earth} />
                </Grid>
                <Grid item xs={12} xl={6}>


                    <Typography component="h1" variant="h3">
                        Welcome Back!
                    </Typography>
                    <form className={classes.form} onSubmit={userLogin} >
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>


                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signup" variant="body2">
                                    New here? Sign up now!!
                                </Link>
                            </Grid>
                        </Grid>
                    </form>



                </Grid>
            </div>
        </Container>
    );
}

