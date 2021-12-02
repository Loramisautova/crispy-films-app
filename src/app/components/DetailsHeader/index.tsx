import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { EMediaType } from '../../enums';
import { IIdRouteParam } from '../../features/models';
import { useGetMovieQuery } from '../../features/movies/api';
import { useGetTvQuery } from '../../features/tv/api';

import { useStyles } from './styles';

interface IProps {
    type: EMediaType;
}

interface IDetails {
    id: number;
    title: string;
    posterPath?: string;
    releaseDate: string;
    href: string;
}

export const DetailsHeader: React.FC<IProps> = (props) => {
    const { type } = props;
    const classes = useStyles();
    const [details, setDetails] = useState<IDetails | undefined>();

    const { id: movieId } = useParams<IIdRouteParam>();
    const { id: tvId } = useParams<IIdRouteParam>();

    const useGetMovieState = useGetMovieQuery(movieId);
    const useGetTvState = useGetTvQuery(tvId);

    const date = details?.releaseDate.substring(0, 4);

    useEffect(() => {
        if (type === EMediaType.MOVIE) {
            setDetails(
                useGetMovieState.data
                    ? {
                          id: useGetMovieState.data?.id,
                          title: useGetMovieState.data?.title,
                          posterPath: useGetMovieState.data?.posterPath,
                          releaseDate: useGetMovieState.data?.releaseDate,
                          href: `/movie/${useGetMovieState.data?.id?.toString()}`,
                      }
                    : undefined,
            );
        } else {
            setDetails(
                useGetTvState.data
                    ? {
                          id: useGetTvState.data?.id,
                          title: useGetTvState.data?.name,
                          posterPath: useGetTvState.data?.posterPath,
                          releaseDate: useGetTvState.data?.firstAirDate,
                          href: `/tv/${useGetTvState.data?.id?.toString()}`,
                      }
                    : undefined,
            );
        }
    }, [type, useGetMovieState.data, useGetTvState.data]);

    return (
        <div className={classes.root}>
            {details && (
                <div className={classes.wrapper}>
                    <Link to={details.href}>
                        <div className={classes.image}>
                            <img
                                src={`https://www.themoviedb.org/t/p/w58_and_h87_face${details.posterPath}`}
                                alt={details.title}
                            />
                        </div>
                    </Link>
                    <div className={classes.content}>
                        <Link to={details.href}>
                            <div className={classes.title}>
                                <Typography variant="h6" gutterBottom component="div">
                                    {details.title} ({date})
                                </Typography>
                            </div>
                        </Link>
                        <Link to={details.href} className={classes.link}>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                &#x2190; Back to main
                            </Typography>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
