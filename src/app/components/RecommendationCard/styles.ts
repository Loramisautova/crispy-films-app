import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
    },
    image: {},
    imageWrapper: {
        height: 141,
        '&:hover': {
            '& $date': {
                visibility: 'visible',
            },
        },
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: theme.spacing(1),
    },
    title: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    date: {
        height: 40,
        top: -40,
        visibility: 'hidden',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        opacity: 0.8,
        padding: theme.spacing(0, 1),
        backgroundColor: theme.palette.grey[100],
    },
    releaseDate: {
        marginLeft: theme.spacing(1),
    },
}));
