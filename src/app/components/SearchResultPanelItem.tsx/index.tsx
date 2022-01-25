import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface ISearchResultPanelItemProps {
    items: IItem[];
}

export interface IItem {
    title: string;
    count?: number;
}

export const SearchResultPanelItem: React.FC<ISearchResultPanelItemProps> = (props) => {
    const { items } = props;
    const classes = useStyles();

    return (
        <MenuList>
            {items?.map((item) => (
                <MenuItem className={classes.resultItem}>
                    <Typography>{item.title}</Typography>
                    <span className={classes.count}>{item.count}</span>
                </MenuItem>
            ))}
        </MenuList>
    );
};
