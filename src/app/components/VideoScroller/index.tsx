import React from 'react';

import { IVideoItem } from '../../features/models';
import { VideoCard } from '../VideoCard';

import { useStyles } from './styles';

import { TRAILERS } from '../../consts';

interface IVideoScrollerProps {
    items?: IVideoItem;
}

export const VideoScroller: React.FC<IVideoScrollerProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            {TRAILERS.length &&
                TRAILERS.map((trailer) => (
                    <VideoCard key={trailer.id} video={trailer.key} title={trailer.name} date={trailer.published_at} />
                ))}
        </div>
    );
};
