import React, { useState } from 'react';

import { MovieScroller } from '../../components/MovieScroller';
import { VideoScroller } from '../../components/VideoScroller';
import { TRAILERS } from '../../consts';
import { useGetPopularMoviesQuery, usePrefetch as usePopularMoviesPrefetch } from '../../features/movies/api';
import { useGetTrendingQuery, usePrefetch as useTrendingPrefetch } from '../../features/trending/api';
import { useGetPopularTvQuery } from '../../features/tv/api';
import { SearchBar } from '../../components/SearchBar';
import { useStyles } from './styles';

export const MainPage: React.FC = () => {
    const [trendingTab, setTrendingTab] = useState('day');
    const [popularTab, setPopularTab] = useState('tv');
    const isTvTabSelected = popularTab === 'tv';
    const classes = useStyles();

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
            <div className={classes.searchSection}>
                <SearchBar />
            </div>
            <MovieScroller
                items={popularResults}
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
            <VideoScroller
                items={TRAILERS}
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
            <MovieScroller
                items={useGetTrendingState.data?.results}
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
        </div>
    );
};
