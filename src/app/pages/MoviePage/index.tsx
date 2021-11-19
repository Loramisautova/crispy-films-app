import React from 'react';
import { useParams } from 'react-router-dom';
import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';
import { useGetMovieQuery, useGetCreditsQuery } from '../../features/movies/api';

import { IIdRouteParam } from '../../features/models';

export const MoviePage: React.FC = () => {
    const { id: movieId } = useParams<IIdRouteParam>();
    const useGetMovieState = useGetMovieQuery(movieId);
    const useGetCreditsState = useGetCreditsQuery(movieId);
    // const { title, posterPath, genres, runtime, tagline, overview, voteAverage, releaseDate } =
    //     useGetMovieState.data || {};

    console.log(useGetMovieState.data);
    console.log(useGetCreditsState.data?.cast);

    return (
        <div>
            {useGetMovieState.data && (
                <PosterCard
                    name={useGetMovieState.data?.title}
                    posterPath={useGetMovieState.data?.posterPath}
                    genres={useGetMovieState.data?.genres}
                    runtime={[useGetMovieState.data?.runtime]}
                    tagline={useGetMovieState.data?.tagline}
                    overview={useGetMovieState.data?.overview}
                    voteAverage={useGetMovieState.data?.voteAverage}
                    releaseDate={useGetMovieState.data?.releaseDate}
                    // creators={useGetMovieState.data?.createdBy}
                />
            )}
            {useGetCreditsState.data && <CastScroller items={useGetCreditsState.data?.cast} />}
        </div>
    );
};
