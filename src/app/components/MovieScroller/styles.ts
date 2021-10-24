import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        padding: theme.spacing(1, 0),
        overflowX: 'scroll',
        overflowY: 'hidden',
    },
    card: {
        '& + &': {
            marginLeft: theme.spacing(3),
        },
    },
}));
