import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { ICast } from '../../features/models';
import { CastCard } from '../CastCard';
import { Scroller } from '../Scroller';

import { useStyles } from './styles';

interface ICastScrollerProps {
    items: ICast[];
    viewMoreUrl: string;
}

export const CastScroller: React.FC<ICastScrollerProps> = (props) => {
    const { items, viewMoreUrl } = props;
    const classes = useStyles();

    return (
        <div>
            <Scroller>
                {items?.slice(0, 10).map((item) => (
                    <CastCard
                        className={classes.card}
                        name={item.name}
                        character={item.character}
                        profilePath={item.profilePath}
                    />
                ))}
                <div className={classes.card}>
                    <Link to={viewMoreUrl} className={classes.cardWrapper}>
                        <Typography className={classes.moreCard} variant="body1">
                            View More
                            <span className={classes.arrow}>&#x2192;</span>
                        </Typography>
                    </Link>
                </div>
            </Scroller>
        </div>
    );
};
