import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

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
}));
