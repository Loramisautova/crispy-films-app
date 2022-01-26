import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

export interface IItem {
    title: string;
    count?: number;
}

export const SearchResultPanelItem: React.FC<IItem> = (props) => {
    const { title, count } = props;
    const classes = useStyles();

    return (
        <MenuItem className={classes.resultItem}>
            <Typography>{title}</Typography>
            <span className={classes.count}>{count}</span>
        </MenuItem>
    );
};
