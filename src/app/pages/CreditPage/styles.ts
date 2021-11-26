import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    columnWrapper: {},
    contentWrapper: {
        display: 'flex',
        paddingTop: theme.spacing(4),
    },
    title: {
        display: 'flex',
    },
    castNum: {
        marginLeft: theme.spacing(0.5),
        color: theme.palette.grey[600],
        fontWeight: 400,
    },
    departmentFirst: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(1),
    },
    departmentTitle: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
    },
    panel: {
        width: '100%',
    },
}));
