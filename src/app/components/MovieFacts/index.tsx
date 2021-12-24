import React from 'react';
import { Typography } from '@material-ui/core';
import ISO6391 from 'iso-639-1';

import { useStyles } from './styles';
import { FactsCard } from '../FactsCard';

interface IMovieFactsProps {
    status: string;
    originalLanguage: string;
    revenue: number;
    budget: number;
}

export const MovieFacts: React.FC<IMovieFactsProps> = (props) => {
    const { status, originalLanguage, revenue, budget } = props;
    const classes = useStyles();

    const language = ISO6391.getName(originalLanguage);

    const getNumberFormat = (num: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
    };

    return (
        <FactsCard>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Status </Typography>
                <Typography className={classes.subTitle}>{status}</Typography>
            </div>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Original Language </Typography>
                <Typography className={classes.subTitle}>{language}</Typography>
            </div>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Revenue </Typography>
                <Typography className={classes.subTitle}>{getNumberFormat(revenue)}</Typography>
            </div>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Budget </Typography>
                <Typography className={classes.subTitle}>{getNumberFormat(budget)}</Typography>
            </div>
        </FactsCard>
    );
};
