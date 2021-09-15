import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
        '& + &': {
            marginLeft: theme.spacing(3),
        },
    },
    trigger: {
        padding: theme.spacing(3, 0),
    },
    triggerOpened: {
        color: theme.palette.secondary.main,
    },
    menuPaper: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    menuItemRoot: {
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
    popoverRoot: {
        pointerEvents: 'none',
    },
    popoverPaper: {
        pointerEvents: 'auto',
    },
}));
