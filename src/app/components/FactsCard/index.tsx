import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const FactsCard: React.FC = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Typography variant="h6" className={classes.header}>
                Facts
            </Typography>
            <div>{children}</div>
        </div>
    );
};
