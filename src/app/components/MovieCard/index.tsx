import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';

import { getFormattedDate } from '../../utils/date';
import { EElementSize } from '../../enums';
import { IClassName } from '../../models';

import { ScoreProgress } from '../ScoreProgress';

import { useStyles } from './styles';

export interface IMovieCardProps extends IClassName {
    id?: number;
    title: string;
    date: string;
    posterPath?: string;
    href: string;
    voteAverage?: number;
}

export const MovieCard: React.FC<IMovieCardProps> = (props) => {
    const { className, title, date, posterPath, href, voteAverage } = props;
    const classes = useStyles();

    return (
        <div className={classnames(classes.root, className)}>
            <Link to={href}>
                <div className={classes.image}>
                    {posterPath && (
                        <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`} alt={title} />
                    )}
                </div>
            </Link>
            <div className={classes.content}>
                <div className={classes.score}>
                    <ScoreProgress voteAverage={voteAverage} size={EElementSize.SM} />
                </div>
                <Link to={href}>
                    <Typography className={classes.title} variant="body1">
                        {title}
                    </Typography>
                </Link>
                <Typography className={classes.subTitle} variant="body2">
                    {getFormattedDate(date)}
                </Typography>
            </div>
        </div>
    );
};
