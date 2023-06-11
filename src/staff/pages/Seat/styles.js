import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginTop: '200px'
    },
    title:{
        margin: '20px 0',
    },
    button: {
        padding: '10px 30px',
        margin: '30px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        cursor: 'pointer'
    },
    buttonRed: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        padding: '10px 30px',
        margin: '30px',
        cursor: 'pointer'
    },
    form: {
        width: '200px',
        margin: '0 auto'
    }
}));