import React from 'react';

import { IVideoItem } from '../../features/models';
import { Scroller, ITabItemProps } from '../Scroller';
import { VideoCard } from '../VideoCard';

import { useStyles } from './styles';

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
                    <VideoCard id={trailer.id} videoKey={trailer.key} title={trailer.name} date={trailer.publishedAt} />
                ))}
            </div>
        </Scroller>
    );
};
