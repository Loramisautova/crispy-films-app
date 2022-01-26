import React from 'react';
import { Card, CardHeader, MenuList } from '@material-ui/core';

import { SearchResultPanelItem } from '../SearchResultPanelItem.tsx';
import { IResultsFilteredByType } from '../../features/models';
import { useStyles } from './styles';

interface ISearchResultsPanelProps {
    movieResults: IResultsFilteredByType[];
    tvResults: IResultsFilteredByType[];
    peopleResults: IResultsFilteredByType[];
}

export const SearchResultsPanel: React.FC<ISearchResultsPanelProps> = (props) => {
    const { movieResults = [], tvResults = [], peopleResults = [] } = props;
    const classes = useStyles();

    const items = [
        { title: 'Movies', count: movieResults.length, id: 1 },
        { title: 'TV Shows', count: tvResults.length, id: 2 },
        { title: 'People', count: peopleResults.length, id: 3 },
    ];

    return (
        <Card>
            <CardHeader title="Search Results" className={classes.title} />
            <MenuList>
                {items.map((item) => (
                    <SearchResultPanelItem title={item.title} count={item.count} key={item.id} />
                ))}
            </MenuList>
        </Card>
    );
};
