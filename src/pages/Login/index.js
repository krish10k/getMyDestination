
import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ExploreIcon from '@material-ui/icons/Explore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Earth from '../../assects/Earth.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    pic:{
        height:'100%',
        width:'100%'
    }
}));

export default function Login() {
    const classes = useStyles();

    const [email , setEmail] = useState("")
    const [password ,setPassword] = useState("")

    const userLogin=(e)=>{
        e.preventDefault()
            const user={
            email,
            password
            }

            //CHECKING USER IN LOCAL STORAGE ...PASSING NAME IN SESSION STORAGE
            console.log(user)
          
            
        }
      
    return (
        <Container component="main" maxWidth="md" style={{display:"flex"}}>
            <Grid item sm={0} xl={6}>
               
                <img className={classes.pic} src={Earth} />
            </Grid>
            <Grid item xs={12} xl={6}>               
            <div className={classes.paper}>
            
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
                                onChange={(e)=>setEmail(e.target.value)}
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
                                value ={password}
                                onChange={(e)=>setPassword(e.target.value)}
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
                       Login In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/signup" variant="body2">
                                New here? Sign up now!!
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>


            </Grid>
            
        </Container>
    );
}

