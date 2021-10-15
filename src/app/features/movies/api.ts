import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { TMDB_API_BASE_URL } from '../../consts';
import { IPaginatedQueryArgs } from '../../models';
import { transformToCamelCase } from '../../utils/transformToCamelCase';
import { EAPITag } from '../enums';
import { IPaginatedMovieList } from '../models';

/** TMDB movies api. */
export const tmdbMoviesApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({ baseUrl: `${TMDB_API_BASE_URL}/movie` }),
    tagTypes: [EAPITag.MOVIE],
    endpoints: (build) => ({
        /** Movies popular list. */
        getPopular: build.query<IPaginatedMovieList, IPaginatedQueryArgs | null>({
            query: (params) => ({
                url: '/popular',
                params: {
                    ...params,
                    api_key: '2982bad10a93c3bc7f2c5245f865294c',
                },
            }),
            transformResponse: (response: Record<string, unknown>): IPaginatedMovieList =>
                transformToCamelCase(response),
        }),
    }),
});

export const { useGetPopularQuery } = tmdbMoviesApi;
