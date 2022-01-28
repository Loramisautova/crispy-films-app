import React from 'react';
import { Typography } from '@material-ui/core';

import { IRecommendation } from '../../features/models';
import { RecommendationCard } from '../RecommendationCard';
import { Scroller } from '../Scroller';
import { useStyles } from './styles';

interface IRecommendationScrollerProps {
    recommendations: IRecommendation[];
}

export const RecommendationScroller: React.FC<IRecommendationScrollerProps> = (props) => {
    const { recommendations } = props;
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h6">Recommendations</Typography>
            <Scroller>
                {recommendations?.map((recommendation) => (
                    <RecommendationCard
                        className={classes.card}
                        posterPath={recommendation.posterPath}
                        title={recommendation.title}
                        voteAverage={recommendation.voteAverage}
                    />
                ))}
            </Scroller>
        </div>
    );
};
