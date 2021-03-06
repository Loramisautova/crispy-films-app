import React from 'react';

import { IMovieListItem, isTvListItem, ITVListItem } from '../../features/models';

import { IMovieCardProps, MovieCard } from '../MovieCard';
import { ITabItemProps, Scroller } from '../Scroller';

import { useStyles } from './styles';

interface IMovieScrollerProps {
    title: string;
    items?: (IMovieListItem | ITVListItem)[];
    tabs: ITabItemProps[];
}

export const MovieScroller: React.FC<IMovieScrollerProps> = (props) => {
    const { items, tabs, title } = props;
    const classes = useStyles();

    return (
        <Scroller tabs={tabs} title={title}>
            {items?.map((item) => {
                const movieCardItem: IMovieCardProps = isTvListItem(item)
                    ? {
                          id: item.id,
                          title: item.name,
                          date: item.firstAirDate,
                          posterPath: item.posterPath,
                          href: `/tv/${item.id.toString()}`,
                          voteAverage: item.voteAverage,
                      }
                    : {
                          id: item.id,
                          title: item.title,
                          date: item.releaseDate,
                          posterPath: item.posterPath,
                          href: `/movie/${item.id.toString()}`,
                          voteAverage: item.voteAverage,
                      };
                return (
                    <MovieCard
                        key={movieCardItem.id}
                        className={classes.card}
                        title={movieCardItem.title}
                        date={movieCardItem.date}
                        posterPath={movieCardItem.posterPath}
                        href={movieCardItem.href}
                        voteAverage={movieCardItem.voteAverage}
                    />
                );
            })}
        </Scroller>
    );
};
