import { alpha, makeStyles } from '@material-ui/core';

import { globalStyles } from '../../styles/global';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        ...globalStyles(theme).layoutSidePadding,
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: theme.spacing(8),
    },
    logoImage: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(2),
    },
    nav: {
        display: 'flex',
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 400,
            },
        },
    },
}));
