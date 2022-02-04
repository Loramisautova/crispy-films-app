import React from 'react';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp';
import { format } from 'date-fns';

import { useStyles } from './styles';
import { IClassName } from '../../models';

interface IRecommendationCardProps extends IClassName {
    backdropPath: string | null;
    title: string;
    voteAverage: number;
    releaseDate: string;
}

export const RecommendationCard: React.FC<IRecommendationCardProps> = (props) => {
    const { backdropPath, title, voteAverage, className, releaseDate } = props;
    const classes = useStyles();

    const voteAveragePercentage = voteAverage ? `${Math.round(voteAverage * 10)}%` : 'NR';

    // const dateFormat = format(new Date(releaseDate), 'dd/MM/yyyy');

    return (
        <div className={classnames(classes.root, className)}>
            <div className={classes.imageWrapper}>
                <img src={`https://www.themoviedb.org/t/p/w250_and_h141_face${backdropPath}`} alt={title} />
                <div className={classes.date}>
                    <EventNoteSharpIcon fontSize="small" />
                    <div className={classes.releaseDate}>{releaseDate}</div>
                </div>
            </div>
            <div className={classes.titleWrapper}>
                <Typography variant="body1" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="body1">{voteAveragePercentage}</Typography>
            </div>
        </div>
    );
};
