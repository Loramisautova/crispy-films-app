import React from 'react';
import { useParams } from 'react-router-dom';
import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';
import { useGetMovieQuery, useGetCreditsQuery } from '../../features/movies/api';

import { IIdRouteParam, IMovieListItem } from '../../features/models';

export const MoviePage: React.FC = () => {
    const { id: movieId } = useParams<IIdRouteParam>();
    const useGetMovieState = useGetMovieQuery(movieId);
    const useGetCreditsState = useGetCreditsQuery(movieId);
    const { title, posterPath, genres, runtime, tagline, overview, voteAverage, releaseDate } =
        useGetMovieState.data || ({} as IMovieListItem);

    console.log(useGetMovieState.data);
    console.log(useGetCreditsState.data?.id);

    return (
        <div>
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
                    // creators={useGetMovieState.data?.createdBy}
                />
            )}
            {useGetCreditsState.data && (
                <CastScroller
                    items={useGetCreditsState.data.cast}
                    viewMoreUrl={`/movie/${useGetCreditsState.data.id}/cast`}
                />
            )}
        </div>
    );
};
