import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { TMDB_API_BASE_URL } from '../../consts';
import { transformToCamelCase } from '../../utils/transformToCamelCase';
import { EAPITag } from '../enums';
import { IPaginatedMovieList, IMovieListItem, IMediaCreditList, IRecommendationsList } from '../models';

/** TMDB movies api. */
export const tmdbMoviesApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({ baseUrl: `${TMDB_API_BASE_URL}/movie` }),
    tagTypes: [EAPITag.MOVIE],
    endpoints: (build) => ({
        getPopularMovies: build.query<IPaginatedMovieList, void>({
            query: () => ({
                url: `/popular`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): IPaginatedMovieList =>
                transformToCamelCase(response),
        }),
        getMovie: build.query<IMovieListItem, string>({
            query: (movieId) => ({
                url: `/${movieId}`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): IMovieListItem => transformToCamelCase(response),
            providesTags: (_, __, id) => [{ type: EAPITag.MOVIE, id }],
        }),
        getMovieCredits: build.query<IMediaCreditList, string>({
            query: (movieId) => ({
                url: `/${movieId}/credits`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): IMediaCreditList => transformToCamelCase(response),
        }),
        getMovieRecommendations: build.query<IRecommendationsList, string>({
            query: (movieId) => ({
                url: `/${movieId}/recommendations`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): IRecommendationsList =>
                transformToCamelCase(response),
        }),
    }),
});

// eslint-disable-next-line @typescript-eslint/unbound-method
export const {
    useGetPopularMoviesQuery,
    usePrefetch,
    useGetMovieQuery,
    useGetMovieCreditsQuery,
    useGetMovieRecommendationsQuery,
} = tmdbMoviesApi;
