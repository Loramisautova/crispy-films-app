import React from 'react';
import { Scroller } from '../../components/Scroller';

import { useGetPopularQuery } from '../../features/movies/api';

export const MainPage: React.FC = () => {
    const popularMoviesState = useGetPopularQuery(null);

    // tslint:disable:no-console
    console.log('#######');
    console.log('popularMoviesState:', popularMoviesState);
    console.log('#######');
    // tslint:enable:no-console

    return (
        <div>
            <Scroller
                title="What's Popular"
                tabs={[
                    { title: 'Streaming' },
                    { title: 'On TV' },
                    { title: 'For Rent' },
                    { title: 'In Theaters' },
                ]}
                items={popularMoviesState.data?.results}
            />
            <Scroller
                title="What's Popular"
                tabs={[
                    { title: 'Streaming' },
                    { title: 'On TV' },
                    { title: 'For Rent' },
                    { title: 'In Theaters' },
                ]}
                items={popularMoviesState.data?.results}
            />
            <Scroller
                title="What's Popular"
                tabs={[
                    { title: 'Streaming' },
                    { title: 'On TV' },
                    { title: 'For Rent' },
                    { title: 'In Theaters' },
                ]}
                items={popularMoviesState.data?.results}
            />
            <Scroller
                title="What's Popular"
                tabs={[
                    { title: 'Streaming' },
                    { title: 'On TV' },
                    { title: 'For Rent' },
                    { title: 'In Theaters' },
                ]}
                items={popularMoviesState.data?.results}
            />
            <Scroller
                title="What's Popular"
                tabs={[
                    { title: 'Streaming' },
                    { title: 'On TV' },
                    { title: 'For Rent' },
                    { title: 'In Theaters' },
                ]}
                items={popularMoviesState.data?.results}
            />
            <Scroller
                title="What's Popular"
                tabs={[
                    { title: 'Streaming' },
                    { title: 'On TV' },
                    { title: 'For Rent' },
                    { title: 'In Theaters' },
                ]}
                items={popularMoviesState.data?.results}
            />
        </div>
    );
};
