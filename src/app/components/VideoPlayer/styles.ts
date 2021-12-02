import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1024,
        backgroundColor: theme.palette.common.black,
        outline: 'none',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    close: {
        color: theme.palette.common.white,
        cursor: 'pointer',
    },
    iframe: {
        width: '100%',
        height: '100%',
    },
}));
