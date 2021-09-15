import { makeStyles } from '@material-ui/core';
import React from 'react';

import { globalStyles } from '../styles/global';

const useStyles = makeStyles((theme) => ({
    root: {
        ...globalStyles(theme).layoutSidePadding,
    },
}));

export const MainLayout: React.FC = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};