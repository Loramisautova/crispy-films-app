import { alpha, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        '&::after': {
            content: `''`,
            position: 'absolute',
            top: 0,
            right: 0,
            width: 60,
            height: '100%',
            backgroundImage: `linear-gradient(to right, rgb(255, 255, 255, 0) 0%, rgb(255, 255, 255, 1) 100%)`,
        },
    },
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
