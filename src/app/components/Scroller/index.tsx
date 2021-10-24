import { Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';

import { MovieScroller } from '../MovieScroller';

import { useStyles } from './styles';

interface ITabItemProps {
    title: string;
    onMouseEnter?: (e: React.MouseEvent<unknown>) => void;
    onClick?: (e: React.MouseEvent<unknown>) => void;
}

interface IScrollerProps {
    title: string;
    tabs?: ITabItemProps[];
}

export const Scroller: React.FC<IScrollerProps> = (props) => {
    const { title, tabs, children } = props;
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
            <MovieScroller>{children}</MovieScroller>
        </div>
    );
};
