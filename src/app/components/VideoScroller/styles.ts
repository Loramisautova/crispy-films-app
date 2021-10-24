import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        minHeight: 0,
        height: 'auto',
        padding: theme.spacing(3, 0),
        overflowX: 'scroll',
        overflowY: 'hidden',
    },
    card: {
        '& + &': {
            marginLeft: theme.spacing(3),
        },
    },
}));
