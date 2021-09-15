import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { APP_NAME } from '../../consts';
import { APP_ROUTES } from '../../routes/consts';

import { HeaderMenu } from './Menu';
import { useStyles } from './styles';

export const Header: React.FC = () => {
    const classes = useStyles();

    const handleLogoClick = () => window.location.replace(APP_ROUTES.MAIN.PATH);

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <div
                    className={classes.logo}
                    role='link'
                    tabIndex={0}
                    onClick={handleLogoClick}
                    onKeyPress={handleLogoClick}
                >
                    <Logo className={classes.logoImage} />
                    <Typography variant='h6' display='inline'>
                        {APP_NAME}
                    </Typography>
                </div>
                <div className={classes.nav}>
                    <HeaderMenu />
                </div>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Movies, TV Shows, People"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};
