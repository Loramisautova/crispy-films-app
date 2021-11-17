import React from 'react';

import { IMovieCreditList } from '../../features/models';

interface ICastScrollerProps {
    items?: IMovieCreditList[];
}

export const CastScroller: React.FC<ICastScrollerProps> = (props) => (
    // const { items } = props;
    // const classes = useStyles();

    // <Scroller>
    //     {items?.map((item) => {
    //         return (
    //             <MovieCard
    //                 key={item.id}
    //                 className={classes.card}
    //                 title={item.title}
    //                 date={item.date}
    //                 posterPath={item.posterPath}
    //                 href={item.href}
    //             />
    //         );
    //     })}
    // </Scroller>
    <div>CastScroller</div>
);
