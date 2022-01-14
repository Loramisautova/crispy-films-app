import React, { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as qs from 'qs';

import { useLazySearchQuery } from '../../features/search/api';

export const SearchPage = () => {
    const { search } = useLocation();
    const [query, queryState] = useLazySearchQuery();
    const { data } = queryState;

    const searchQuery = useMemo(() => qs.parse(search, { ignoreQueryPrefix: true })?.q, [search]);

    useEffect(() => {
        if (searchQuery !== undefined) {
            query(searchQuery);
        }
    }, [query, searchQuery]);

    return <div>Search Page</div>;
};
