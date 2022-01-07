import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: theme.spacing(2),
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
    },
    subTitle: {
        fontWeight: theme.typography.fontWeightLight,
    },
}));
