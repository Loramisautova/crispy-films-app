import Typography from '@mui/material/Typography';
import React from 'react';

import { ICast } from '../../features/models';
import { CastCard } from '../CastCard';
import { Scroller } from '../Scroller';

import { useStyles } from './styles';

interface ICastScrollerProps {
    items?: ICast[];
}

export const CastScroller: React.FC<ICastScrollerProps> = (props) => {
    const { items } = props;
    const classes = useStyles();

    console.log(items);

    return (
        <div>
            <Scroller>
                {items?.map((item) => (
                    <CastCard
                        className={classes.card}
                        name={item.name}
                        character={item.character}
                        profilePath={item.profilePath}
                    />
                ))}
            </Scroller>
        </div>
    );
};
