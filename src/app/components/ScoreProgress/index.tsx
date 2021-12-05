import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import classnames from 'classnames';

import { EElementSize } from '../../enums';

import { useStyles } from './styles';

interface IScoreProgressProps {
    voteAverage?: number;
    size?: EElementSize;
}

export const ScoreProgress: React.FC<IScoreProgressProps> = (props) => {
    const { voteAverage, size = EElementSize.MD } = props;
    const isSmall = size === EElementSize.SM;
    const classes = useStyles();

    const voteAveragePercentage = voteAverage ? voteAverage * 10 : 0;

    console.log('##############');
    console.log('voteAveragePercentage', voteAveragePercentage);
    console.log('##############');

    return (
        <div
            className={classnames(classes.score, {
                [classes.small]: isSmall,
            })}
        >
            <Typography className={classes.percent} variant={isSmall ? 'caption' : 'body1'}>
                {voteAveragePercentage === 0 ? 'NR' : `${voteAveragePercentage}%`}
            </Typography>
            <CircularProgress
                classes={{
                    circle: classes.circle,
                }}
                className={classnames(classes.progress, {
                    [classes.grey]: voteAveragePercentage === 0,
                    [classes.red]: voteAveragePercentage > 0 && voteAveragePercentage <= 39,
                    [classes.yellow]: voteAveragePercentage >= 40 && voteAveragePercentage <= 69,
                    [classes.green]: voteAveragePercentage >= 70,
                })}
                variant="determinate"
                value={voteAveragePercentage === 0 ? 100 : voteAveragePercentage}
                size="100%"
            />
        </div>
    );
};
