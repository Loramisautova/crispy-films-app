import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetMovieQuery } from '../../features/movies/api';
import { IIdRouteParam } from '../../features/models';

export const MoviePage: React.FC = () => {
    const { id: movieId } = useParams<IIdRouteParam>();
    const useGetMovieState = useGetMovieQuery(movieId);

    return <div>Movie Page : {useGetMovieState.data?.title}</div>;
};
