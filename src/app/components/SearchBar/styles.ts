import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: theme.typography.fontWeightBold,
        margin: 0,
    },
    subTitle: {
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing(2),
    },
    search: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textField: {
        width: '100%',
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
    searchBtn: {
        padding: `0 ${theme.spacing(2)}px`,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}));
