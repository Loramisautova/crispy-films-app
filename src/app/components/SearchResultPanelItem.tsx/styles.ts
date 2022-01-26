import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    resultItem: {
        justifyContent: 'space-between',
        textAlign: 'center',
        '&:hover': {
            '& $count': {
                backgroundColor: theme.palette.common.white,
            },
        },
    },
    count: {
        padding: theme.spacing(0, 1),
        minWidth: 30,
        backgroundColor: theme.palette.grey[200],
    },
}));
