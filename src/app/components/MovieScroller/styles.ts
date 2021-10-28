import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    card: {
        '& + &': {
            marginLeft: theme.spacing(3),
        },
    },
}));
