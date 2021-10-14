import { Menu, MenuItem, Typography } from '@material-ui/core';
import classnames from 'classnames';
import React, { useEffect } from 'react';

import { useStyles } from './styles';

interface IHoverMenuItemProps {
    title: string;
    onClick?: (e: React.MouseEvent<unknown>) => void;
}

interface IHoverMenuProps {
    id: string;
    title: string;
    items: IHoverMenuItemProps[];
}

export const HoverMenu: React.FC<IHoverMenuProps> = (props) => {
    const { id, title, items } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mouseOverButton, setMouseOverButton] = React.useState<boolean>(false);
    const [mouseOverMenu, setMouseOverMenu] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);

    useEffect(() => {
        setOpen(mouseOverButton || mouseOverMenu);
    }, [mouseOverButton, mouseOverMenu]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setMouseOverButton(false);
        setMouseOverMenu(false);
    };

    const handleEnterButton = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
        setMouseOverButton(true);
    };

    const handleLeaveButton = () => {
        setMouseOverButton(false);
    };

    const handleEnterMenu = () => {
        setMouseOverMenu(true);
    };

    const handleLeaveMenu = () => {
        setMouseOverMenu(false);
    };

    const handleMenuItemClick = (
        e: React.MouseEvent<unknown>,
        onMenuItemClick?: (e: React.MouseEvent<unknown>) => void,
    ) => {
        if (onMenuItemClick) {
            onMenuItemClick(e);
        }
        handleClose();
    };

    return (
        <div className={classes.root}>
            <div
                className={classnames(classes.trigger, { [classes.triggerOpened]: open })}
                aria-owns={open ? id : undefined}
                aria-haspopup="true"
                role="menuitem"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
                onMouseEnter={handleEnterButton}
                onMouseLeave={handleLeaveButton}
            >
                <Typography variant="body2">{title}</Typography>
            </div>
            <Menu
                id={id}
                classes={{ paper: classes.menuPaper }}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                open={open}
                elevation={1}
                MenuListProps={{
                    onMouseEnter: handleEnterMenu,
                    onMouseLeave: handleLeaveMenu,
                }}
                PopoverClasses={{
                    root: classes.popoverRoot,
                    paper: classes.popoverPaper,
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handleClose}
                keepMounted
                disableRestoreFocus
            >
                {items.map((item) => (
                    <MenuItem
                        key={item.title}
                        classes={{ root: classes.menuItemRoot }}
                        onClick={(e) => handleMenuItemClick(e, item.onClick)}
                    >
                        <Typography variant="body2">{item.title}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
