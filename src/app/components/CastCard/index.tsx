import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import React from 'react';

import { IClassName } from '../../models';

import { useStyles } from './styles';
import { ReactComponent as User } from '../../assets/user.svg';

export interface ICastCardProps extends IClassName {
    id?: number;
    name: string;
    character?: string;
    profilePath?: string;
}

export const CastCard: React.FC<ICastCardProps> = (props) => {
    const { className, name, character, profilePath } = props;
    const classes = useStyles();

    return (
        <div className={classnames(classes.root, className)}>
            <div className={classes.image}>
                {profilePath?.length ? (
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${profilePath}`} alt={name} />
                ) : (
                    <User className={classes.userImage} />
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
