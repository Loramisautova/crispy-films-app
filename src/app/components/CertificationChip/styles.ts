import { makeStyles } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    certification: {
        border: `1px solid ${Colors.grey['400']}`,
        padding: theme.spacing(0, 0.3),
    },
}));
