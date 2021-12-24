import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
    },
    header: {
        marginBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightBold,
    },
}));
