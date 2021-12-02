import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {},
    trailer: {
        minWidth: 300,
        width: 300,
        height: `calc(300px / 1.78)`,
    },
    wrapper: {
        // borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        top: 0,
        left: 0,
        minWidth: '100%',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
    },
    image: {
        maxWidth: 300,
        width: 300,
        height: `calc(300px / 1.78)`,
        '& > img': {
            display: 'inline-block',
            width: '100%',
            height: '100%',
        },
    },
    play: {
        display: 'flex',
        width: 300,
        height: `calc(300px / 1.78)`,
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.palette.primary.contrastText,
        fontSize: '4em',
    },
    content: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    subTitle: {
        marginTop: theme.spacing(0.3),
        color: theme.palette.grey[600],
    },
}));
