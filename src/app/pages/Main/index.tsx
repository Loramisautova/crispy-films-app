import React from 'react';

import { Scroller } from '../../components/Scroller';
import { useGetPopularQuery } from '../../features/movies/api';
import { useGetTrendingQuery } from '../../features/trending/api';

export const MainPage: React.FC = () => {
    const useGetPopularState = useGetPopularQuery(null);
    const useGetTrendingState = useGetTrendingQuery(null);

    return (
        <div>
            <Scroller
                title="What's Popular"
                tabs={[{ title: 'Streaming' }, { title: 'On TV' }, { title: 'For Rent' }, { title: 'In Theaters' }]}
                items={useGetPopularState.data?.results}
            />
            <Scroller title="Trending" items={useGetTrendingState.data?.results} />
        </div>
    );
};
