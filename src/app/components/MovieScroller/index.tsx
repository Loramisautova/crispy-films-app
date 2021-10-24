import React from 'react';

import { IMovieListItem, isTvListItem, ITVListItem } from '../../features/models';

import { IMovieCardProps, MovieCard } from '../MovieCard';

import { useStyles } from './styles';

interface IMovieScrollerProps {
    items?: (IMovieListItem | ITVListItem)[];
}

export const MovieScroller: React.FC<IMovieScrollerProps> = (props) => {
    const { items } = props;
    const classes = useStyles();

    return (
        <div className={classes.content}>
            {items?.length &&
                items.map((item) => {
                    const movieCardItem: IMovieCardProps = isTvListItem(item)
                        ? { id: item.id, title: item.name, date: item.firstAirDate, posterPath: item.posterPath }
                        : { id: item.id, title: item.title, date: item.releaseDate, posterPath: item.posterPath };
                    return (
                        <MovieCard
                            key={movieCardItem.id}
                            className={classes.card}
                            title={movieCardItem.title}
                            date={movieCardItem.date}
                            posterPath={movieCardItem.posterPath}
                        />
                    );
                })}
        </div>
    );
};
