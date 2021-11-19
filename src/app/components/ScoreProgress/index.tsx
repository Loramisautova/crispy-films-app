import React from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { useStyles } from './styles';

interface IScoreProgressProps {
    voteAverage: number;
}

export const ScoreProgress: React.FC<IScoreProgressProps> = (props) => {
    const { voteAverage } = props;
    const classes = useStyles();

    return (
        <div className={classes.score}>
            <Typography className={classes.percent}>{`${voteAverage * 10}%`}</Typography>
            <CircularProgress className={classes.icon} variant="determinate" value={voteAverage * 10} size="100%" />
        </div>
    );
};
