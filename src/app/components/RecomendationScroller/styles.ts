import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    card: {
        '& + &': {
            marginLeft: theme.spacing(3),
        },
    },
}));
