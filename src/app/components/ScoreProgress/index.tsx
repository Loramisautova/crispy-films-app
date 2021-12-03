import React, { useMemo } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';

import classnames from 'classnames';

import { EElementSize } from '../../enums';
import { getColor } from '../../utils/progress';

import { useStyles } from './styles';

interface IScoreProgressProps {
    voteAverage: number;
    size?: EElementSize;
}

export const ScoreProgress: React.FC<IScoreProgressProps> = (props) => {
    const { voteAverage, size = EElementSize.MD } = props;
    const isSmall = size === EElementSize.SM;
    const classes = useStyles();

    const score = voteAverage * 10;

    return (
        <div
            className={classnames(classes.score, {
                [classes.small]: isSmall,
            })}
        >
            <Typography className={classes.percent} variant={isSmall ? 'caption' : 'body1'}>
                {`${score}%`}
            </Typography>
            <CircularProgress
                classes={{
                    circle: classes.circle,
                }}
                className={classes.progress}
                variant="determinate"
                value={score}
                size="100%"
                style={{ color: useMemo(() => getColor(score), [score]) }}
            />
        </div>
    );
};
