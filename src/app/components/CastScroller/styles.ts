import { alpha, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    card: {
        '& + &': {
            marginLeft: theme.spacing(3),
        },
    },
    cardWrapper: {
        display: 'flex',
        textDecoration: 'none',
        color: alpha(theme.palette.common.black, 1),
        height: '100%',
    },
    moreCard: {
        width: '150px',
        fontWeight: theme.typography.fontWeightBold,
        alignSelf: 'center',
    },
    arrow: {
        marginLeft: theme.spacing(0.5),
    },
}));
