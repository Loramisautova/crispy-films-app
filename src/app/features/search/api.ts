import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { TMDB_API_BASE_URL } from '../../consts';
import { transformToCamelCase } from '../../utils/transformToCamelCase';
import { EAPITag } from '../enums';
import { IPaginatedData } from '../models';

/** TMDB Search API. */
export const tmdbSearchApi = createApi({
    reducerPath: 'search',
    baseQuery: fetchBaseQuery({
        baseUrl: `${TMDB_API_BASE_URL}/search`,
    }),
    tagTypes: [EAPITag.SEARCH],
    endpoints: (build) => ({
        search: build.query<IPaginatedData<any>, string>({
            query: (q) => {
                return {
                    url: '/multi',
                    params: {
                        api_key: `2982bad10a93c3bc7f2c5245f865294c`,
                        query: q,
                    },
                };
            },
            transformResponse: (response: Record<string, unknown>): IPaginatedData<any> =>
                transformToCamelCase(response),
        }),
    }),
});

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { useLazySearchQuery } = tmdbSearchApi;
