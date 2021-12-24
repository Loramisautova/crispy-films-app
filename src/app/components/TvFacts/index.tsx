import React from 'react';
import { Typography } from '@material-ui/core';
import ISO6391 from 'iso-639-1';

import { INetwork } from '../../features/models';

import { FactsCard } from '../FactsCard';

import { useStyles } from './styles';

interface ITvFactsProps {
    status: string;
    originalLanguage: string;
    type: string;
    networks: INetwork[];
}

export const TvFacts: React.FC<ITvFactsProps> = (props) => {
    const { status, originalLanguage, type, networks } = props;
    const classes = useStyles();

    const language = ISO6391.getName(originalLanguage);

    return (
        <FactsCard>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Status </Typography>
                <Typography className={classes.subTitle}>{status}</Typography>
            </div>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Network </Typography>
                {networks &&
                    networks.map((network) => (
                        <img alt={network.name} src={`https://www.themoviedb.org/t/p/h30/${network.logoPath}`} />
                    ))}
            </div>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Type </Typography>
                <Typography className={classes.subTitle}>{type}</Typography>
            </div>
            <div className={classes.wrapper}>
                <Typography className={classes.title}> Original Language </Typography>
                <Typography className={classes.subTitle}>{language}</Typography>
            </div>
        </FactsCard>
    );
};
