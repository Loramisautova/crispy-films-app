import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';
import { TvFacts } from '../../components/TvFacts';
import { IIdRouteParam, ITVListItem } from '../../features/models';
import { useGetTvCreditsQuery, useGetTvQuery } from '../../features/tv/api';
import { useStyles } from '../MoviePage/styles';

export const TvPage: React.FC = () => {
    const classes = useStyles();
    const { id: tvId } = useParams<IIdRouteParam>();
    const useGetTvState = useGetTvQuery(tvId);
    const useGetTvCreditsState = useGetTvCreditsQuery(tvId);
    const {
        name,
        posterPath,
        genres,
        episodeRunTime,
        tagline,
        overview,
        voteAverage,
        firstAirDate,
        originalLanguage,
        status,
        type,
        networks,
        createdBy,
    } = useGetTvState.data || ({} as ITVListItem);

    const filteredCrew = useMemo(
        () =>
            createdBy?.map((c) => {
                return {
                    name: c.name,
                    jobs: ['Creator'],
                };
            }),
        [createdBy],
    );

    return (
        <Grid className={classes.root}>
            <Grid item xs={12} className={classes.sectionPoster}>
                {useGetTvState.data && (
                    <PosterCard
                        name={name}
                        posterPath={posterPath}
                        genres={genres}
                        runtime={episodeRunTime}
                        tagline={tagline}
                        overview={overview}
                        voteAverage={voteAverage}
                        releaseDate={firstAirDate}
                        creators={filteredCrew}
                    />
                )}
            </Grid>
            <Grid container item spacing={3}>
                <Grid item xs={9}>
                    {useGetTvCreditsState.data && (
                        <CastScroller
                            items={useGetTvCreditsState.data.cast}
                            viewMoreUrl={`/tv/${useGetTvCreditsState.data.id}/cast`}
                        />
                    )}
                </Grid>
                <Grid item xs={2}>
                    <TvFacts status={status} networks={networks} type={type} originalLanguage={originalLanguage} />
                </Grid>
            </Grid>
        </Grid>
    );
};
