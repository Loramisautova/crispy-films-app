import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { TMDB_API_BASE_URL } from '../../consts';
import { transformToCamelCase } from '../../utils/transformToCamelCase';
import { EAPITag } from '../enums';
import { IMovieListItem, IPaginatedData, ITVListItem } from '../models';

/** TMDB Trending API. */
export const tmdbTrendingApi = createApi({
    reducerPath: 'trending',
    baseQuery: fetchBaseQuery({
        baseUrl: `${TMDB_API_BASE_URL}/trending/all`,
    }),
    tagTypes: [EAPITag.TRENDING],
    endpoints: (build) => ({
        getTrending: build.query<IPaginatedData<(IMovieListItem | ITVListItem)[]>, string>({
            query: (period) => ({
                url: `/${period}`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): IPaginatedData<(IMovieListItem | ITVListItem)[]> =>
                transformToCamelCase(response),
        }),
    }),
});

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { useGetTrendingQuery, usePrefetch } = tmdbTrendingApi;
