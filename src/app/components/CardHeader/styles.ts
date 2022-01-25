import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(2),
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
    },
}));
