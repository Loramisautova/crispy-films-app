import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        marginBottom: theme.spacing(1),
    },
    userImage: {
        width: 66,
        height: 66,
    },
    content: {
        padding: theme.spacing(1),
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    subTitle: {
        marginBottom: theme.spacing(0.2),
        color: theme.palette.grey[600],
    },
}));
