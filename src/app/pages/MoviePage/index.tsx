import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { IIdRouteParam, IMovieListItem } from '../../features/models';
import { useGetMovieCreditsQuery, useGetMovieQuery } from '../../features/movies/api';

import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';
import { MovieFacts } from '../../components/MovieFacts';
import { filterCrewByJobs } from '../../utils/filterCrewByJobs';

import { useStyles } from './styles';

export const MoviePage: React.FC = () => {
    const classes = useStyles();
    const { id: movieId } = useParams<IIdRouteParam>();
    const useGetMovieState = useGetMovieQuery(movieId);
    const useGetMovieCreditsState = useGetMovieCreditsQuery(movieId);
    const {
        title,
        posterPath,
        genres,
        runtime,
        tagline,
        overview,
        voteAverage,
        releaseDate,
        status,
        originalLanguage,
        budget,
        revenue,
    } = useGetMovieState.data || ({} as IMovieListItem);

    const filteredCrew = useMemo(
        () => filterCrewByJobs(useGetMovieCreditsState.data?.crew, ['Director', 'Screenplay', 'Characters', 'Writer']),
        [useGetMovieCreditsState.data?.crew],
    );

    return (
        <div className={classes.root}>
            {useGetMovieState.data && (
                <div className={classes.sectionPoster}>
                    <PosterCard
                        name={title}
                        posterPath={posterPath}
                        genres={genres}
                        runtime={[runtime]}
                        tagline={tagline}
                        overview={overview}
                        voteAverage={voteAverage}
                        releaseDate={releaseDate}
                        creators={filteredCrew}
                    />
                </div>
            )}
            <Grid container item spacing={3}>
                <Grid item xs={9}>
                    {useGetMovieCreditsState.data && (
                        <CastScroller
                            items={useGetMovieCreditsState.data.cast}
                            viewMoreUrl={`/movie/${useGetMovieCreditsState.data.id}/cast`}
                        />
                    )}
                </Grid>
                <Grid item xs={3}>
                    {useGetMovieState.data && (
                        <MovieFacts
                            status={status}
                            originalLanguage={originalLanguage}
                            budget={budget}
                            revenue={revenue}
                        />
                    )}
                </Grid>
            </Grid>
        </div>
    );
};
