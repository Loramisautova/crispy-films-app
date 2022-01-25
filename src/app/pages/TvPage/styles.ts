import { makeStyles } from '@material-ui/core';

import { globalStyles } from '../../styles/global';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: globalStyles(theme).pagePadding,
    },
}));
