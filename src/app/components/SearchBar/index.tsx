import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import * as qs from 'qs';

import { APP_ROUTES } from '../../routes/consts';

import { useStyles } from './styles';

export const SearchBar = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const history = useHistory();

    const handleSearch = (e: React.MouseEvent<unknown>) => {
        e.preventDefault();

        if (value) {
            const queryString = qs.stringify({ q: value });

            history.push(`${APP_ROUTES.SEARCH.PATH}?${queryString}`);
        }
    };

    return (
        <div>
            <Typography variant="h3" className={classes.title} gutterBottom component="div">
                Welcome.
            </Typography>
            <Typography variant="h6" className={classes.subTitle} gutterBottom component="div">
                Navigate the world of Crispy Films by exploring films, tv shows and people.
            </Typography>
            <Paper component="form" className={classes.search}>
                <InputBase
                    placeholder="Search Film, TV Show and People"
                    className={classes.textField}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    inputProps={{ 'aria-label': 'Search Film, TV Show and People' }}
                />
                <Button
                    type="submit"
                    className={classes.searchBtn}
                    onClick={(e) => handleSearch(e)}
                    aria-label="search"
                >
                    Search
                </Button>
            </Paper>
        </div>
    );
};
