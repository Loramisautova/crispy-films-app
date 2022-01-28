import React from 'react';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';

import { useStyles } from './styles';
import { IClassName } from '../../models';

interface IRecommendationCardProps extends IClassName {
    posterPath: string | null;
    title: string;
    voteAverage: number;
}

export const RecommendationCard: React.FC<IRecommendationCardProps> = (props) => {
    const { posterPath, title, voteAverage, className } = props;
    const classes = useStyles();

    const voteAveragePercentage = voteAverage ? `${Math.round(voteAverage * 10)}%` : 'NR';

    return (
        <div className={classnames(classes.root, className)}>
            <div>
                <img
                    src={`https://www.themoviedb.org/t/p/w250_and_h141_face${posterPath}`}
                    style={{ objectFit: 'fill' }}
                    alt={title}
                    className={classes.image}
                />
            </div>
            <div className={classes.title}>
                <Typography variant="body1">{title}</Typography>
                <Typography variant="body1">{voteAveragePercentage}</Typography>
            </div>
        </div>
    );
};
