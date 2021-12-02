import React from 'react';
import { useParams } from 'react-router-dom';
import { CastScroller } from '../../components/CastScroller';
import { PosterCard } from '../../components/PosterCard';

import { IIdRouteParam, IMovieListItem } from '../../features/models';
import { useGetMovieCreditsQuery, useGetMovieQuery } from '../../features/movies/api';

export const MoviePage: React.FC = () => {
    const { id: movieId } = useParams<IIdRouteParam>();
    const useGetMovieState = useGetMovieQuery(movieId);
    const useGetMovieCreditsState = useGetMovieCreditsQuery(movieId);
    const { title, posterPath, genres, runtime, tagline, overview, voteAverage, releaseDate } =
        useGetMovieState.data || ({} as IMovieListItem);

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
            {useGetMovieCreditsState.data && (
                <CastScroller
                    items={useGetMovieCreditsState.data.cast}
                    viewMoreUrl={`/movie/${useGetMovieCreditsState.data.id}/cast`}
                />
            )}
        </div>
    );
};
