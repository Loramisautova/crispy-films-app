import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            '& $image': {
                opacity: 0.8,
            },
            '& $title': {
                color: theme.palette.secondary.main,
            },
        },
    },
    video: {
        width: 300,
        height: 'auto',
        marginRight: theme.spacing(3),
    },
    wrapper: {
        position: 'relative',
        cursor: 'pointer',
    },
    image: {
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
        position: 'absolute',
        top: 0,
        left: 0,
        width: 300,
        height: `calc(300px / 1.78)`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.palette.primary.contrastText,
        fontSize: '4em',
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: theme.spacing(1),
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
        cursor: 'pointer',
    },
    subTitle: {
        marginTop: theme.spacing(0.3),
        color: theme.palette.grey[600],
    },
}));
