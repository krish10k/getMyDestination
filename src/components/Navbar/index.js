import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { GiPlanetConquest } from 'react-icons/gi';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#40245c",
    position: "fixed",
    top: "0"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" >
            <GiPlanetConquest size={40} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            GetMyDestination
          </Typography>
          <Button color="inherit" onClick={() => history.push("/login")}> Login </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
