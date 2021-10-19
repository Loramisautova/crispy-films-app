import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import React from 'react';

import { IClassName } from '../../models';

import { useStyles } from './styles';

export interface IMovieCardProps extends IClassName {
    id?: number;
    title: string;
    date: string;
    posterPath?: string;
}

export const MovieCard: React.FC<IMovieCardProps> = (props) => {
    const { className, title, date, posterPath } = props;
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
                    {date}
                </Typography>
            </div>
        </div>
    );
};
