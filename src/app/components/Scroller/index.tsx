import { Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import { IMovieListItem } from '../../features/movies/models';
import { MovieCard } from '../MovieCard';

import { useStyles } from './styles';

interface ITabItemProps {
    title: string;
    onClick?: (e: React.MouseEvent<unknown>) => void
}

interface IScrollerProps {
    title: string;
    tabs?: ITabItemProps[];
    items?: IMovieListItem[];
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
                <Typography className={classes.headerTitle} variant='h5'>{title}</Typography>
                {tabs?.length && (
                    <Tabs
                        value={selectedTab}
                        textColor="primary"
                        onChange={handleChangeSelectedTab}
                    >
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.title}
                                classes={{
                                    root: classes.headerTabItem,
                                }}
                                label={tab.title}
                            />
                        ))}
                    </Tabs>
                )}
            </div>
            <div className={classes.content}>
                {items?.length && (
                    items.map((item) => (
                        <MovieCard
                            key={item.id}
                            className={classes.card}
                            {...item}
                        />
                    ))
                )}
            </div>
        </div>
    );
}