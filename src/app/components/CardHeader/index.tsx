import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

interface ICardHeaderProps {
    title: string;
}

export const CardHeader: React.FC<ICardHeaderProps> = ({ title }) => {
    const classes = useStyles();

    return (
        <Typography className={classes.title} variant="h6" gutterBottom component="div">
            {title}
        </Typography>
    );
};
