import { makeStyles } from '@material-ui/core/styles';
export const SignupStyle=() => makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        padding: "2rem",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: "0.8rem",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#DCD6F7",
        color: "black"
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#6d7fce"
    },
    pic: {
        height: '100%',
        width: '100%'
    }
}));