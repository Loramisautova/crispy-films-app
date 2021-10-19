import { Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';

import { IMovieListItem, isTvListItem, ITVListItem } from '../../features/models';
import { IMovieCardProps, MovieCard } from '../MovieCard';

import { useStyles } from './styles';

interface ITabItemProps {
    title: string;
    onMouseEnter?: (e: React.MouseEvent<unknown>) => void;
    onClick?: (e: React.MouseEvent<unknown>) => void;
}

interface IScrollerProps {
    title: string;
    tabs?: ITabItemProps[];
    items?: (IMovieListItem | ITVListItem)[];
}

export const Scroller: React.FC<IScrollerProps> = (props) => {
    const { title, tabs, items } = props;
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChangeSelectedTab = (event: React.ChangeEvent<unknown>, newSelectedTab: number) => {
        setSelectedTab(newSelectedTab);
    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.headerTitle} variant="h5">
                    {title}
                </Typography>
                {tabs?.length && (
                    <Tabs value={selectedTab} textColor="primary" onChange={handleChangeSelectedTab}>
                        {tabs.map((tab) => (
                            <Tab
                                classes={{
                                    root: classes.headerTabItem,
                                }}
                                label={tab.title}
                                onMouseEnter={tab.onMouseEnter}
                                onClick={tab.onClick}
                            />
                        ))}
                    </Tabs>
                )}
            </div>
            <div className={classes.content}>
                {items?.length &&
                    items.map((item) => {
                        const movieCardItem: IMovieCardProps = isTvListItem(item)
                            ? {
                                  id: item.id,
                                  title: item.name,
                                  date: item.firstAirDate,
                                  posterPath: item.posterPath,
                              }
                            : {
                                  id: item.id,
                                  title: item.title,
                                  date: item.releaseDate,
                                  posterPath: item.posterPath,
                              };

                        return (
                            <MovieCard
                                key={movieCardItem.id}
                                className={classes.card}
                                title={movieCardItem.title}
                                date={movieCardItem.date}
                                posterPath={movieCardItem.posterPath}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
