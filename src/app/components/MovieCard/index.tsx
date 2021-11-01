import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';

import { IClassName } from '../../models';

import { useStyles } from './styles';

export interface IMovieCardProps extends IClassName {
    id?: number;
    title: string;
    date: string;
    posterPath?: string;
    href: string;
}

export const MovieCard: React.FC<IMovieCardProps> = (props) => {
    const { className, title, date, posterPath, href } = props;
    const classes = useStyles();

    return (
        <div className={classnames(classes.root, className)}>
            <Link to={href}>
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
            </Link>
        </div>
    );
};
