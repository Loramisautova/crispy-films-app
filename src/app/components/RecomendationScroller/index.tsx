import React from 'react';
import { Typography } from '@material-ui/core';

import { IMovieRecommendation } from '../../features/models';
import { RecommendationCard } from '../RecommendationCard';
import { Scroller } from '../Scroller';
import { useStyles } from './styles';

interface IRecommendationScrollerProps {
    recommendations: IMovieRecommendation[];
}

export const RecommendationScroller: React.FC<IRecommendationScrollerProps> = (props) => {
    const { recommendations } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6">Recommendations</Typography>
            <Scroller>
                {recommendations?.map((recommendation) => (
                    <RecommendationCard
                        className={classes.card}
                        key={recommendation.id}
                        backdropPath={recommendation.backdropPath}
                        title={recommendation.title}
                        voteAverage={recommendation.voteAverage}
                        releaseDate={recommendation.releaseDate}
                    />
                ))}
            </Scroller>
        </div>
    );
};
