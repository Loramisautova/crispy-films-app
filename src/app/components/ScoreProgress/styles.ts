import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    score: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },
    percent: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'hsl(0deg 0% 100%)',
    },
    icon: {
        position: 'absolute',
        top: '0px',
        left: '0px',
    },
    circle: {
        color: 'hsl(120deg 100% 25%)',
    },
}));
