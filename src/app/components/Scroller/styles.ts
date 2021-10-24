import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& + &': {
            marginTop: theme.spacing(3),
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
    },
    headerTitle: {
        marginRight: theme.spacing(10),
        fontWeight: theme.typography.fontWeightMedium,
    },
    headerTabItem: {
        fontSize: theme.typography.caption.fontSize,
    },
}));
