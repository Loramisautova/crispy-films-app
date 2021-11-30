import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            '& $image': {
                opacity: 0.8,
            },
        },
    },
    image: {
        width: 150,
        '& > img': {
            display: 'inline-block',
            width: '100%',
            height: '100%',
        },
    },
    content: {
        padding: theme.spacing(1),
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    subTitle: {
        marginTop: theme.spacing(0.3),
        color: theme.palette.grey[600],
    },
}));
