import { makeStyles } from '@material-ui/core';
import { globalStyles } from '../../styles/global';

export const useStyles = makeStyles((theme) => ({
    searchSection: {
        ...globalStyles(theme).layoutSidePadding,
        margin: '60px 0 60px',
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        margin: 0,
    },
    subTitle: {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: '1.4em',
        marginBottom: theme.spacing(2),
    },
    search: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: 30,
    },
    textField: {
        width: '100%',
        padding: '10px 20px',
    },
    searchBtn: {
        height: '100%',
        borderRadius: 30,
        padding: '0px 20px',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}));
