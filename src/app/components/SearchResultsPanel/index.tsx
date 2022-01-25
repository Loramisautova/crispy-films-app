import React from 'react';
import { Card } from '@material-ui/core';

import { CardHeader } from '../CardHeader';
import { SearchResultPanelItem } from '../SearchResultPanelItem.tsx';
import { IResultsFilteredByType } from '../../features/models';

interface ISearchResultsPanelProps {
    movieResults: IResultsFilteredByType[];
    tvResults: IResultsFilteredByType[];
    peopleResults: IResultsFilteredByType[];
}

export const SearchResultsPanel: React.FC<ISearchResultsPanelProps> = (props) => {
    const { movieResults = [], tvResults = [], peopleResults = [] } = props;

    return (
        <Card>
            <CardHeader title="Search Results" />
            <SearchResultPanelItem
                items={[
                    { title: 'Movies', count: movieResults.length },
                    { title: 'TV Shows', count: tvResults.length },
                    { title: 'People', count: peopleResults.length },
                ]}
            />
        </Card>
    );
};
