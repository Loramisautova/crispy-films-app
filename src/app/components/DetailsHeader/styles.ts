import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: Colors.blueGrey['900'],
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2, 5),
    },
    poster: {
        display: 'flex',
        cursor: 'pointer',
    },
    title: {
        display: 'flex',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
    date: {
        paddingLeft: theme.spacing(0.5),
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: theme.spacing(3),
    },
    link: {
        width: '100%',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}));
