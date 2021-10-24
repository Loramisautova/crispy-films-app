import React, { useState } from 'react';

import { Scroller } from '../../components/Scroller';
import { MovieScroller } from '../../components/MovieScroller';
import { VideoScroller } from '../../components/VideoScroller';
import { useGetPopularMoviesQuery, usePrefetch as usePopularMoviesPrefetch } from '../../features/movies/api';
import { useGetTrendingQuery, usePrefetch as useTrendingPrefetch } from '../../features/trending/api';
import { useGetPopularTvQuery } from '../../features/tv/api';

export const MainPage: React.FC = () => {
    const [trendingTab, setTrendingTab] = useState('day');
    const [popularTab, setPopularTab] = useState('tv');
    const isTvTabSelected = popularTab === 'tv';

    const useGetPopularTvState = useGetPopularTvQuery();
    const useGetPopularMoviesState = useGetPopularMoviesQuery(undefined, { skip: isTvTabSelected });
    const prefetchPopularMovies = usePopularMoviesPrefetch('getPopularMovies');

    const useGetTrendingState = useGetTrendingQuery(trendingTab);
    const prefetchTrendingWeek = useTrendingPrefetch('getTrending');

    const popularResults = isTvTabSelected
        ? useGetPopularTvState.data?.results
        : useGetPopularMoviesState.data?.results;

    return (
        <div>
            <Scroller
                title="What's Popular"
                tabs={[
                    { title: 'On TV', onClick: () => setPopularTab('tv') },
                    {
                        title: 'In Theaters',
                        onClick: () => setPopularTab('movie'),
                        onMouseEnter: () => prefetchPopularMovies(),
                    },
                ]}
            />
            <MovieScroller items={popularResults} />
            <Scroller
                title="Latest Trailers"
                tabs={[
                    {
                        title: 'On TV',
                    },
                    {
                        title: 'In Theatres',
                        onClick: () => setTrendingTab('week'),
                        onMouseEnter: () => prefetchTrendingWeek('week'),
                    },
                ]}
            />
            <VideoScroller />
            <Scroller
                title="Trending"
                tabs={[
                    {
                        title: 'Today',
                        onClick: () => setTrendingTab('day'),
                    },
                    {
                        title: 'This week',
                        onClick: () => setTrendingTab('week'),
                        onMouseEnter: () => prefetchTrendingWeek('week'),
                    },
                ]}
            />
            <MovieScroller items={useGetTrendingState.data?.results} />
        </div>
    );
};
