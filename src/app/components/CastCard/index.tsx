import React from 'react';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';

import { IClassName } from '../../models';

import { useStyles } from './styles';

export interface IMovieCardProps extends IClassName {
    id?: number;
    name: string;
    character: string;
    profilePath?: string;
}

export const CastCard: React.FC<IMovieCardProps> = (props) => {
    const { className, name, character, profilePath } = props;
    const classes = useStyles();

    return (
        <div className={classnames(classes.root, className)}>
            <div className={classes.image}>
                {profilePath && (
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${profilePath}`} alt={name} />
                )}
            </div>
            <div className={classes.content}>
                <Typography className={classes.title} variant="body1">
                    {name}
                </Typography>
                <Typography className={classes.subTitle} variant="body2">
                    {character}
                </Typography>
            </div>
        </div>
    );
};
