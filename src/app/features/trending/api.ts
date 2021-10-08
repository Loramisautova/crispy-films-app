import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { TMDB_API_BASE_URL } from '../../consts';
import { IPaginatedQueryArgs } from '../../models';
import { transformToCamelCase } from '../../utils/transformToCamelCase';

import { EAPITag } from '../enums';

import { IPaginatedMovieList } from '../models';

/** TMDB Trending API. */
export const tmdbTrendingApi = createApi({
    reducerPath: 'trending',
    baseQuery: fetchBaseQuery({ baseUrl: `${TMDB_API_BASE_URL}/trending` }),
    tagTypes: [EAPITag.TRENDING],
    endpoints: (build) => ({
        /** Trending list. */
        getTrending: build.query<IPaginatedMovieList, IPaginatedQueryArgs | null>({
            query: (params) => ({
                url: '/all/day',
                params: {
                    ...params,
                    api_key: '2982bad10a93c3bc7f2c5245f865294c',
                },
            }),
            transformResponse: (response: Record<string, unknown>): IPaginatedMovieList =>
                transformToCamelCase(response),
            // providesTags: (result) => {
            //     if (result) {
            //         return [
            //             ...result.data.map(({ id }) => ({ type: EAPITag.ENTITY as const, id })),
            //             { type: EAPITag.ENTITY, id: 'LIST' },
            //         ];
            //     }

            //     return [{ type: EAPITag.ENTITY, id: 'LIST' }];
            // },
        }),
    }),
});

export const { useGetTrendingQuery } = tmdbTrendingApi;
