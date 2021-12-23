import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { Avatar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useIsAuthenticated, useMsal } from "@azure/msal-react";

import SignInMenu from './SignInMenu';
import SignOutMenu from './SignOutMenu';

export default function PageLayout(props) {
    const isAuthenticated = useIsAuthenticated();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <MuiAppBar position="fixed" open={open}>
                <Toolbar>
                    <MenuIcon />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sample PWA
                    </Typography>
                    <Tooltip title="Account settings">
                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                    {isAuthenticated ?
                        <SignOutMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
                        : <SignInMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />}
                </Toolbar>
            </MuiAppBar>
            {props.children}
        </>
    )
}