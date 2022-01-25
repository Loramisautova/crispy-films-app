import React, { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import * as qs from 'qs';

import { useLazySearchQuery } from '../../features/search/api';
import { SearchResultsPanel } from '../../components/SearchResultsPanel';
import { IResultsFilteredByType } from '../../features/models';

import { useStyles } from './styles';

export const SearchPage = () => {
    const { search } = useLocation();
    const [query, queryState] = useLazySearchQuery();
    const { data } = queryState;
    const classes = useStyles();

    const searchQuery = useMemo(() => qs.parse(search, { ignoreQueryPrefix: true })?.q?.toString(), [search]);

    const filterResultsByType = (type: string): IResultsFilteredByType[] =>
        data?.results.reduce((result: IResultsFilteredByType[], curr: IResultsFilteredByType) => {
            if (curr.mediaType === type) {
                result.push(curr);
            }

            return result;
        }, []);

    useEffect(() => {
        if (searchQuery !== undefined) {
            query(searchQuery);
        }
    }, [query, searchQuery]);

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={3}>
                <SearchResultsPanel
                    movieResults={filterResultsByType('movie')}
                    tvResults={filterResultsByType('tv')}
                    peopleResults={filterResultsByType('people')}
                />
            </Grid>
            <Grid item xs={9}>
                Section
            </Grid>
        </Grid>
    );
};
