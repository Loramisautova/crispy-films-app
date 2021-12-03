import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    score: {
        width: 68,
        height: 68,
        position: 'relative',
        borderRadius: '50%',
        backgroundColor: Colors.blueGrey['900'],
        border: `4px solid ${Colors.blueGrey['900']}`,
    },
    small: {
        '&$score': {
            width: 40,
            height: 40,
            border: `2px solid ${Colors.blueGrey['900']}`,
        },
    },
    percent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.contrastText,
    },
    progress: {
        position: 'absolute',
        top: '0',
        left: '0',
        // '& > svg': {
        //     color: theme.palette.success.main,
        // },
    },
    red: {
        '&$progress': {
            color: Colors.red['500'],
        },
    },
    yellow: {
        '&$progress': {
            color: Colors.yellow['500'],
        },
    },
    green: {
        '&$progress': {
            color: Colors.green['500'],
        },
    },
    circle: {
        strokeLinecap: 'round',
    },
}));
