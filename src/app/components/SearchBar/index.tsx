import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

export const SearchBar = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleInput = () => {
        console.log('##############');
        console.log('value', value);
        console.log('##############');
    };

    return (
        <div className={classes.searchSection}>
            <Typography variant="h3" className={classes.title} gutterBottom component="div">
                Welcome.
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle} gutterBottom component="div">
                Navigate the world of Crispy Films by exploring films, tv shows and people.
            </Typography>
            <Paper component="form" className={classes.search}>
                <InputBase
                    placeholder="Search Film, TV Show and People"
                    className={classes.textField}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Link to={`/search?q=${value}`}>
                    <Button type="submit" className={classes.searchBtn} onClick={handleInput} aria-label="search">
                        Search
                    </Button>
                </Link>
            </Paper>
        </div>
    );
};
