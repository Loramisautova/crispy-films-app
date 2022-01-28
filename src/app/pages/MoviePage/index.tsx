import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { IIdRouteParam, IMovieListItem } from '../../features/models';
import { useGetMovieCreditsQuery, useGetMovieQuery, useGetMovieRecommendationsQuery } from '../../features/movies/api';

import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';
import { MovieFacts } from '../../components/MovieFacts';
import { filterCrewByJobs } from '../../utils/filterCrewByJobs';
import { RecommendationScroller } from '../../components/RecomendationScroller';

import { useStyles } from './styles';

export const MoviePage: React.FC = () => {
    const classes = useStyles();
    const { id: movieId } = useParams<IIdRouteParam>();
    const useGetMovieState = useGetMovieQuery(movieId);
    const useGetMovieCreditsState = useGetMovieCreditsQuery(movieId);
    const useGetMovieRecommendationsState = useGetMovieRecommendationsQuery(movieId);
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

    console.log('##############');
    console.log('useGetMovieRecommendationsState', useGetMovieRecommendationsState.data);
    console.log('##############');

    const filteredCrew = useMemo(
        () => filterCrewByJobs(useGetMovieCreditsState.data?.crew, ['Director', 'Screenplay', 'Characters', 'Writer']),
        [useGetMovieCreditsState.data?.crew],
    );

    return (
        <div className={classes.root}>
            {useGetMovieState.data && (
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
            )}
            <div>
                <>
                    {useGetMovieCreditsState.data && (
                        <CastScroller
                            items={useGetMovieCreditsState.data.cast}
                            viewMoreUrl={`/movie/${useGetMovieCreditsState.data.id}/cast`}
                        />
                    )}
                </>
                <>
                    {useGetMovieState.data && (
                        <MovieFacts
                            status={status}
                            originalLanguage={originalLanguage}
                            budget={budget}
                            revenue={revenue}
                        />
                    )}
                </>
                <>
                    {useGetMovieRecommendationsState.data && (
                        <RecommendationScroller recommendations={useGetMovieRecommendationsState.data.results} />
                    )}
                </>
            </div>
        </div>
    );
};
