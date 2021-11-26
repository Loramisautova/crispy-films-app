import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { TMDB_API_BASE_URL } from '../../consts';
import { transformToCamelCase } from '../../utils/transformToCamelCase';
import { EAPITag } from '../enums';
import { IMediaCreditList, IPaginatedTvList, ITVListItem } from '../models';

/** TMDB tv api. */
export const tmdbTvApi = createApi({
    reducerPath: 'tv',
    baseQuery: fetchBaseQuery({ baseUrl: `${TMDB_API_BASE_URL}/tv` }),
    tagTypes: [EAPITag.TV],
    endpoints: (build) => ({
        getPopularTv: build.query<IPaginatedTvList, void>({
            query: () => ({
                url: `/popular`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): IPaginatedTvList => transformToCamelCase(response),
        }),
        getTv: build.query<ITVListItem, string>({
            query: (tvId) => ({
                url: `/${tvId}`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): ITVListItem => transformToCamelCase(response),
            providesTags: (_, __, id) => [{ type: EAPITag.TV, id }],
        }),
        getCredits: build.query<IMediaCreditList, string>({
            query: (tvId) => ({
                url: `/${tvId}/credits`,
                params: { api_key: '2982bad10a93c3bc7f2c5245f865294c' },
            }),
            transformResponse: (response: Record<string, unknown>): IMediaCreditList => transformToCamelCase(response),
        }),
    }),
});

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { useGetPopularTvQuery, useGetTvQuery, useGetCreditsQuery } = tmdbTvApi;
