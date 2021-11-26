import { Typography } from '@material-ui/core';
import React from 'react';

import { ReactComponent as User } from '../../assets/user.svg';

import { useStyles } from './styles';

interface ICreditCardProps {
    profilePath: string;
    title: string;
    subTitle: string;
}

export const CreditCard: React.FC<ICreditCardProps> = (props) => {
    const { profilePath, title, subTitle } = props;
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div>
                {profilePath?.length ? (
                    <img src={`https://www.themoviedb.org/t/p/w66_and_h66_face${profilePath}`} alt={title} />
                ) : (
                    <User className={classes.userImage} />
                )}
            </div>
            <div className={classes.content}>
                <Typography className={classes.title} variant="body1">
                    {title}
                </Typography>
                <Typography className={classes.subTitle} variant="body2">
                    {subTitle}
                </Typography>
            </div>
        </div>
    );
};
