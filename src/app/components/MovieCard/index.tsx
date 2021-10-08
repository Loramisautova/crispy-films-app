import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import React from 'react';

import { IMovieListItem } from '../../features/models';
import { IClassName } from '../../models';

import { useStyles } from './styles';

interface IMovieCardProps extends IMovieListItem, IClassName {}

export const MovieCard: React.FC<IMovieCardProps> = (props) => {
    const { className, title, releaseDate, posterPath } = props;
    const classes = useStyles();

    return (
        <div className={classnames(classes.root, className)}>
            <div className={classes.image}>
                {posterPath && (
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`} alt={title} />
                )}
            </div>
            <div className={classes.content}>
                <Typography className={classes.title} variant="body1">
                    {title}
                </Typography>
                <Typography className={classes.subTitle} variant="body2">
                    {releaseDate}
                </Typography>
            </div>
        </div>
    );
};
