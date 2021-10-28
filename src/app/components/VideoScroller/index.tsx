import React from 'react';

import { IVideoItem } from '../../features/models';
import { Scroller } from '../Scroller';
import { VideoCard } from '../VideoCard';

import { useStyles } from './styles';

interface ITabItemProps {
    title: string;
    onMouseEnter?: (e: React.MouseEvent<unknown>) => void;
    onClick?: (e: React.MouseEvent<unknown>) => void;
}

interface IVideoScrollerProps {
    title: string;
    items?: IVideoItem[];
    tabs: ITabItemProps[];
}

export const VideoScroller: React.FC<IVideoScrollerProps> = (props) => {
    const classes = useStyles();
    const { tabs, title, items } = props;

    return (
        <Scroller tabs={tabs} title={title}>
            <div className={classes.content}>
                {items?.map((trailer) => (
                    <VideoCard key={trailer.id} video={trailer.key} title={trailer.name} date={trailer.published_at} />
                ))}
            </div>
        </Scroller>
    );
};
