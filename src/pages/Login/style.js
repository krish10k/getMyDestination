
import { makeStyles } from '@material-ui/core/styles';
export const LoginStyle=()=> makeStyles((theme) => ({
    paper: {
        padding:"0.1rem",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:"white",
        borderRadius:"0.8rem"
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor:"#6d7fce"
    },
    pic:{
        height:'50%',
        width:'50%',
        display:"flex",
        justifyContent:"center",
     margin:"auto"
    }
}));